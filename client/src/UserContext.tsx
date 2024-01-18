import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

type UserInfo = {
    username?: string;
} | null;

type UserContextType = {
    userInfo: UserInfo;
    setUserInfo: Dispatch<SetStateAction<UserInfo>>;
};

interface UserContextProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserContextProvider({ children }: UserContextProviderProps) {
    const [userInfo, setUserInfo] = useState<UserInfo>({});

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
}
