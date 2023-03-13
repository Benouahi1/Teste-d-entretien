import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRoomComponent } from './detalles-room.component';

describe('DetallesRoomComponent', () => {
  let component: DetallesRoomComponent;
  let fixture: ComponentFixture<DetallesRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesRoomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
