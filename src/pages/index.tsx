import type { NextPage } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const router = useRouter();
    useEffect(() => {
        if (router.pathname === "/") {
            router.push("/resume");
        }
    });
    return <></>;
};

export default Home;
