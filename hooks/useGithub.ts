import { useState, useEffect } from 'react';
import { Repositories } from "../types";
import fetch from "node-fetch";

export default function Github() {
    const [repositories, setRepositories] = useState<Repositories[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/api/github')
            .then(res => res.json())
            .then(data => setRepositories(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        null
    };

    return repositories;
};
