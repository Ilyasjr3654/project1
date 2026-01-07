export interface FootballField {
  id: string;
  name: string;
  location: string;
  pricePerHour: number;
  surface: 'Gazon naturel' | 'Gazon synthétique' | 'Terre battue';
  size: '5x5' | '7x7' | '11x11';
  image: string;
  availability: string[];
  amenities: string[];
  rating: number;
}

export interface Booking {
  id: string;
  fieldId: string;
  date: string;
  timeSlot: string;
  userName: string;
  phoneNumber: string;
  totalPrice: number;
}

export type RootStackParamList = {
  Home: undefined;
  FieldList: undefined;
  FieldDetails: { field: FootballField };
  Booking: { field: FootballField };
};
