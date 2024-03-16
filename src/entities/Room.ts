export class Room {
  constructor(
    public readonly name: string,
    public readonly price: number,
    public readonly bedtype: string[],
    public readonly number_of_guests: number,
    public readonly bedrooms: number,
    public readonly beds: number,
    public readonly bathrooms: number,
    public readonly amenities: string[],
    public readonly description: string,
    public readonly imageUrl: string[],
    public readonly createdAt: Date
  ) {}
}
