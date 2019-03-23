import { RegistroModule } from './registro.module';

describe('RegistroModule', () => {
  let registroModule: RegistroModule;

  beforeEach(() => {
    registroModule = new RegistroModule();
  });

  it('should create an instance', () => {
    expect(registroModule).toBeTruthy();
  });
});
