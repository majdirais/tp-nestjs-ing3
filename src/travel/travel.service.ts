import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { trips } from './travel.interface';

@Injectable()
export class TravelService {
  private trips: trips[] = [
    { id: 1, name: 'to China', price: 9000 },
    { id: 2, name: 'to Morocco', price: 4000 },
  ];

  create(createTravelDto: CreateTravelDto) {
    return 'planifier un nouveau voyage ici';
  }

  findAll(): trips[] {
    return this.trips;
  }

  findOne(id: number): trips {
    const trip = this.trips.find((travel) => travel.id === id);

    if (!trip) {
      throw new NotFoundException(`Travel with ID ${id} not found`);
    }

    return trip;
  }

  update(id: number, updateTravelDto: UpdateTravelDto) {
    return `This action updates a #${id} travel`;
  }

  remove(id: number) {
    return `This action removes a #${id} travel`;
  }
}