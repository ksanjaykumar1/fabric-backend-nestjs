import { Controller, Post } from '@nestjs/common';
import { FabricService } from './fabric.service';

@Controller('fabric')
export class FabricController {
  constructor(private readonly fabricService: FabricService) {}
  @Post('transact')
  writetransact() {
    return this.fabricService.writetransact();
  }
  @Post('read')
  readtransact() {
    return this.fabricService.readtransact();
  }
  @Post('registerAndEnroll')
  registerAndEnroll() {
    return this.fabricService.registerAndEnroll();
  }
}
