import { useEffect, useState } from "react";
import { EntryProps } from "../../@types/entry"
import "./styles.css";

type CreateEntryProps = {
    createEntry: (entry: EntryProps) => void;
}

const CreateEntry = ({ createEntry }: CreateEntryProps) => {
    const [getEntry, setEntry] = useState<EntryProps>({ id: 0, description: "", amount: 0 });

    useEffect(() => { }, [getEntry])

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            createEntry(getEntry);
            setEntry({ id: 0, description: "", amount: 0 });
        }}>
            <input
                type="text"
                placeholder="Descrição"
                value={getEntry.description}
                onChange={(e) => setEntry({ ...getEntry, description: e.target.value })}
            />
            <input
                type="number"
                placeholder="Valor"
                value={getEntry.amount}
                onChange={(e) => setEntry({ ...getEntry, amount: parseFloat(e.target.value) })}
            />
            <button type="submit">Adicionar</button>
        </form>
    )

}

export default CreateEntry;