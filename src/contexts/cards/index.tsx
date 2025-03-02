import { createContext, useContext, useEffect, useState } from "react"
import { useAuth } from "../auth"
import { addDoc, collection, deleteDoc, doc, onSnapshot, query, updateDoc, where } from "firebase/firestore"
import { db } from "../../services"

export enum CardState {
    BACKLOG = 'BACKLOG',
    IN_PROGRESS = 'IN_PROGRESS',
    READY = 'READY',
    IN_TEST = 'IN_TEST',
    APPROVED = 'APPROVED'
}

export type Card = {
    id: string
    title: string
    description: string
    state: CardState
    userId: string
}

interface CardContextType {
    cards: Card[];
    createCard: (data: Omit<Card, 'id' | 'userId'>) => Promise<void>;
    deleteCard: (id: string) => Promise<void>;
    updateCardState: (id: string, newState: CardState) => Promise<void>;
}

export const CardContext = createContext<CardContextType | undefined>(undefined)

export const useCards = () => {
    const context = useContext(CardContext)
    if (!context) {
        throw new Error("useCards deve ser usado dentro do CardProvider")
    }
    return context
}

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
    const [cards, setCards] = useState<Card[]>([])
    const { currentUser } = useAuth()

    useEffect(() => {
        if (!currentUser) return

        const q = query(
            collection(db, "cards"),
            where("userId", "==", currentUser.uid)
        );

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const cards: Card[] = snapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                state: doc.data().state,
                userId: doc.data().userId
            }))

            setCards(cards)
        })


        return unsubscribe
    }, [currentUser])

    const createCard = async (data: Omit<Card, 'id' | 'userId'>) => {
        if (!currentUser) throw new Error("Usuário não autenticado");
        await addDoc(collection(db, "cards"), { ...data, userId: currentUser.uid });
    };

    const deleteCard = async (id: string) => {
        const cardRef = doc(db, "cards", id);
        await deleteDoc(cardRef);
    };

    const updateCardState = async (id: string, newState: CardState) => {
        const cardRef = doc(db, "cards", id);
        await updateDoc(cardRef, { state: newState });
    };

    return (
        <CardContext.Provider value={{ cards, createCard, deleteCard, updateCardState }}>
            {children}
        </CardContext.Provider>
    )
}