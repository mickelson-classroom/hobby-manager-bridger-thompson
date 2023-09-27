export type ToastType = "success" | "error" | "info";


export interface CustomToast {
  id: number;
  message: string;
  type: ToastType;
}