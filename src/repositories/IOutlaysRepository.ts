import { Outlay } from "../entities/Outlay";

export interface IOutlaysRepository {
    save(outlay: Outlay): Promise<void>;
    
}