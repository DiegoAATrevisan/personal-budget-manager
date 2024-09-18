import { createContext } from "react";
import { DashboardService } from "../utils/DashboardService";

export const ContextDashboard =
    createContext<{ dashboardService: DashboardService } | undefined>(undefined);