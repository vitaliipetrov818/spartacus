import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { I18nTestingModule } from '@spartacus/core';
import { Permission } from '@spartacus/organization/administration/core';
import { OutletContextData } from '@spartacus/storefront';
import { UrlTestingModule } from 'projects/core/src/routing/configurable-routes/url-translation/testing/url-testing.module';
import { LimitCellComponent } from '..';

describe('LimitCellComponent', () => {
  let component: LimitCellComponent;
  let fixture: ComponentFixture<LimitCellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LimitCellComponent],
      imports: [RouterTestingModule, UrlTestingModule, I18nTestingModule],
      providers: [
        {
          provide: OutletContextData,
          useValue: {
            context: {
              orderApprovalPermissionType: {
                code: 'B2BOrderThresholdTimespanPermission',
              },
              currency: { symbol: '$' },
              periodRange: 'QUARTER',
              threshold: 10000.0,
            } as Permission,
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render time span threshold', () => {
    const el: HTMLElement = fixture.debugElement.query(
      By.css('span.text')
    ).nativeNode;
    expect(el.innerText).toEqual('10000 $ orgPurchaseLimit.per.QUARTER');
  });
});
