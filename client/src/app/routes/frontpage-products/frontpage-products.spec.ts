import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FrontpageProducts } from './frontpage-products';

describe('FrontpageProducts', () => {
  let component: FrontpageProducts;
  let fixture: ComponentFixture<FrontpageProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrontpageProducts],
    }).compileComponents();

    fixture = TestBed.createComponent(FrontpageProducts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
