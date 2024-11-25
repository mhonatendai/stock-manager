export class Car {
  constructor(
    id: number,
    public brand: string,
    public model: string,
    public year?: number // Optional field
  ) {}
}
