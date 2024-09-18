import { useContext } from "react";
import { DashboardService } from "../utils/DashboardService";
import { ContextDashboard } from "../context/contextDashboard";

export const useDashboard = (): DashboardService => {
    const context: { dashboardService: DashboardService } | undefined = useContext(ContextDashboard)
    
    if (!context) {
        throw new Error("O hook só pode useDashboard só pode ser utilizado dentro do contexto DasboardContext")
    }

    return context.dashboardService;
}