export interface Alert {
  id: number,
  type: 'warm'|'ok'|'info'
  title: string
  description: string
}
