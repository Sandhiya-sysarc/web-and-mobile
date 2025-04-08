import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PouchDbPage } from './pouch-db.page';

describe('PouchDbPage', () => {
  let component: PouchDbPage;
  let fixture: ComponentFixture<PouchDbPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PouchDbPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
