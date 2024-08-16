import { WidgetCategoryType } from "@/types/types"

export const json_data: WidgetCategoryType = {
   CSPM: [
      {
         id: "1",
         widgetName: "Cloud Accounts",
         widgetText: "Provides a comprehensive view of cloud security posture.",
         date: "2024-08-15T09:30:00+05:30",
      },
      {
         id: "2",
         widgetName: "Cloud Account Risk Assessment",
         widgetText: "Monitors compliance with cloud security policies.",
         date: "2024-08-15T14:45:00+05:30",
      },
   ],
   CWPP: [
      {
         id: "3",
         widgetName: "Top 5 Namespace Specific Alerts",
         widgetText: "Identifies potential threats across cloud workloads.",
         date: "2024-08-12T08:15:00+05:30",
      },
      {
         id: "4",
         widgetName: "Workload Alerts",
         widgetText: "Scans and manages vulnerabilities in cloud environments.",
         date: "2024-08-15T17:00:00+05:30",
      },
   ],
   Registry: [
      {
         id: "5",
         widgetName: "Image Risk Assessment",
         widgetText: "Audits registry configurations for best practices.",
         date: "2024-08-15T10:30:00+05:30",
      },
      {
         id: "6",
         widgetName: "Image Security Issues",
         widgetText: "Scans container images for security vulnerabilities.",
         date: "2024-08-15T13:20:00+05:30",
      },
   ],
}
