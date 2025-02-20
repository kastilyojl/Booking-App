import axios from 'axios';
import { useAxios } from 'use-axios-client';
import { useState } from 'react';

const client = axios.create({
    baseURL: "http://127.0.0.1:8000/api"
});

export const fetchSeminars = () => {
    const { data, error, loading } = useAxios({
        
    });
};