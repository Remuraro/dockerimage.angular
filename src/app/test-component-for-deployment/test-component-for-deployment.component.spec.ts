import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponentForDeploymentComponent } from './test-component-for-deployment.component';

describe('TestComponentForDeploymentComponent', () => {
  let component: TestComponentForDeploymentComponent;
  let fixture: ComponentFixture<TestComponentForDeploymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponentForDeploymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponentForDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
