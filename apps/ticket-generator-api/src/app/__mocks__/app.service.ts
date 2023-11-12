import { qrCodeStub } from '../test/stubs';

export const AppService = jest.fn().mockReturnValue({
  generateTicket: jest.fn().mockResolvedValue(qrCodeStub),
});
