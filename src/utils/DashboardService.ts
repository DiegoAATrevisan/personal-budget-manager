import { EntryProps } from "../@types/entry";

export class DashboardService {
    private entries: EntryProps[] = []

    public get(): EntryProps[] {
        return this.entries;
    }
    public set(newEntries: EntryProps[]): void {
        this.entries = newEntries;
    }
}