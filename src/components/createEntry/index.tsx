import { useState } from 'react';
import { EntryProps } from '../../@types/entry';
import './styles.css';

type CreateEntryProps = {
    createEntry: (entry: Omit<EntryProps, 'id'>) => void;
};

const CreateEntry: React.FC<CreateEntryProps> = ({ createEntry }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createEntry({
            description,
            amount: parseFloat(amount),
            isBonus: false,
            date: new Date(date),
        });
        setDescription('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Descrição"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Valor"
                required
            />
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <button className="button-19" type="submit">Adicionar</button>
        </form>
    );
};

export default CreateEntry;