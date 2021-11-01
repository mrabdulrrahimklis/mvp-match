export interface IReport {
  paymentId: string;
  amount: number;
  projectId: string;
  gatewayId: string;
  userIds: string[];
  modified: string;
  created: string;
}
