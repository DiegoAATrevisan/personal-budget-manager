import { useState } from "react";
// import { useDashboard } from "../../hook/useDashboard";
import { EntryProps } from "../../@types/entry";
import CreateEntry from "../../components/createEntry";

const Dashboard = () => {
    // const dashboardService = useDashboard();
    const [bonusEntries, setBonusEntries] = useState<EntryProps[]>([]);
    const [onusEntries, setOnusEntries] = useState<EntryProps[]>([]);

    const createBonusEntry = (entry: EntryProps) => {
        const newEntry = { ...entry, id: Date.now(), amount: Math.abs(entry.amount) };
        setBonusEntries([...bonusEntries, newEntry]);
    }

    const createOnusEntry = (entry: EntryProps) => {
        const newEntry = { ...entry, id: Date.now(), amount: -Math.abs(entry.amount) };
        setOnusEntries([...onusEntries, newEntry]);
    }

    const totalAmount = [...bonusEntries, ...onusEntries].reduce((total, entry) => total + entry.amount, 0);

    return (
        <div>
            <h1>Dashboard</h1>
            <div className="totalAmount">
                Total Amount: ${totalAmount.toFixed(2)}
            </div>
            <div className="entriesContainer">
                <div className="onusEntries">
                    <h2>Onus Entries</h2>
                    <ul>
                        {onusEntries.map((entry) => (
                            <li key={entry.id}>{entry.description}: ${entry.amount.toFixed(2)}</li>
                        ))}
                    </ul>
                    <CreateEntry createEntry={createOnusEntry} />
                </div>
                <div className="bonusEntries">
                    <h2>Bonus Entries</h2>
                    <ul>
                        {bonusEntries.map((entry) => (
                            <li key={entry.id}>{entry.description}: ${entry.amount.toFixed(2)}</li>
                        ))}
                    </ul>
                    <CreateEntry createEntry={createBonusEntry} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;