import { Injectable } from '@nestjs/common';

@Injectable()
export class FabricService {
  writetransact() {
    return 'writetransact';
  }
  readtransact() {
    return 'readtransact';
  }
  registerAndEnroll() {
    return 'registerAndEnroll';
  }
}
