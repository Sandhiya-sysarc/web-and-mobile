import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CameraPluginPage } from './camera-plugin.page';

describe('CameraPluginPage', () => {
  let component: CameraPluginPage;
  let fixture: ComponentFixture<CameraPluginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraPluginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
