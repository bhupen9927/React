import React, { useEffect } from "react";
import "./HSBCCurrencyConverter.css";

<script></script>

const HSBCCurrencyConverter = () => {
  return (
    <main>
      <section class="collection-hero">
        <div class="container-new">
          <h1 class="collections-hero__heading">HSBC Currency Zone</h1>
          <p class="collections-hero__subheading">Check, track and chart foreign exchange (FX) rates. Stay on top
            of the
            market
            with insights and HSBC Global Research</p>
          <div class="main-container">
            <div class="collection-switch">
              <div class="basic active"><span>Basic</span></div>
              <div class="advanced"><span>Advanced</span></div>
            </div>
            <div class="content-wrapper basic">
              <div class="basic-content content-continer">
                <div class="form-center">
                  <div class="firstDropdown">
                    <span>Amount</span>
                    <div class="currency-dropDown">
                      <div class="currency-icon"><span>£</span></div>
                      <input id="currencyAmount" class="amountInput"
                        name="currency-rate-form-amount-input" placeholder="Amount"
                        autocomplete="off" type="text" value="1.0000" />
                      <div class="currencyFlag">
                        <div class="currencyFlagName">
                          <p>GBP</p>
                        </div>
                        <div class="currencyFlagImage">
                          <img src="https://flagcdn.com/w40/gb.png" data-flagxs="Flag"
                            alt="flag-img" />
                        </div>
                        <div class="dropDown-arrow">
                          <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark"
                            alt="arrow" />
                        </div>
                      </div>
                      <div class="convertDropDown emailMe-dropdown">
                        <ul>

                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="firstDropdown">
                    <span>Converted to</span>
                    <div class="currency-dropDown">
                      <div class="currency-icon"><span>£</span></div>
                      <input class="amountInput" name="currency-rate-form-amount-input"
                        placeholder="Amount" autocomplete="off" type="text" value="1.1745" />
                      <div class="currencyFlag">
                        <div class="currencyFlagName">
                          <p>GBP</p>
                        </div>
                        <div class="currencyFlagImage">
                          <img src="https://flagcdn.com/w40/eu.png" data-flagxs="Flag"
                            alt="flag-img" />
                        </div>
                        <div class="dropDown-arrow">
                          <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark"
                            alt="arrow" />
                        </div>
                      </div>
                      <div class="convertDropDown goesAboveDropdown">
                        <ul>

                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="timestamp">As of: 15:17:00, Wed Aug 21 2024 BST</div>
                <div class="currency-rate-contianer">
                  <div class="wrapper-elem">
                    <div class="rate-section">
                      <span class="rate-label">Rate</span>
                      <p class="start-rate">£1.0000 = €1.1853</p>
                    </div>
                    <div class="change-section">
                      <span class="change-label">Change <span>(24hr)</span></span>
                      <p class="change-value">0.19% <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 18" class="eihieud0 c-zone-173eg36 ejjze4h0" role="img">
                        <g id="controlPlay">
                          <rect width="4" height="6"></rect>
                          <path
                            d="M16 7.153L9 .151 2 7.153v1.696l6.4-6.4V18h1.2V2.449l6.4 6.4z">
                            <desc>Arrow up</desc>
                          </path>
                        </g>
                      </svg>
                      </p>
                    </div>
                    <div class="weekly-change-section">
                      <span class="weekly-change-label">Change <span>(7 days)</span></span>
                      <p class="weekly-change-value">0.25% <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 18" class="eihieud0 c-zone-173eg36 ejjze4h0" role="img">
                        <g id="controlPlay">
                          <rect width="4" height="6"></rect>
                          <path
                            d="M16 7.153L9 .151 2 7.153v1.696l6.4-6.4V18h1.2V2.449l6.4 6.4z">
                            <desc>Arrow up</desc>
                          </path>
                        </g>
                      </svg></p>
                    </div>
                  </div>
                  <div class="exchange-rate-tracker">
                    <div class="tracker-icon">
                      <img src="https://i.ibb.co/chN7pkqZ/Icon.png" alt="Track exchange rate" />
                    </div>
                    <p class="tracker-text">Track this exchange rate</p>
                  </div>
                </div>
                <div class="notice">Please note: Rates available to customers will be subject to additional
                  costs.</div>
              </div>
              <div class="advance-content content-continer">
                <div class="form-center">
                  <div class="firstDropdown">
                    <span>Amount</span>
                    <div class="currency-dropDown">
                      <div class="currency-icon"><span>£</span></div>
                      <input id="currencyAmount" class="amountInput"
                        name="currency-rate-form-amount-input" placeholder="Amount"
                        autocomplete="off" type="text" value="1.0000" />
                      <div class="currencyFlag">
                        <div class="currencyFlagName">
                          <p>GBP</p>
                        </div>
                        <div class="currencyFlagImage">
                          <img src="https://flagcdn.com/w40/gb.png" data-flagxs="Flag"
                            alt="flag-img" />
                        </div>
                        <div class="dropDown-arrow">
                          <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark"
                            alt="arrow" />
                        </div>
                      </div>
                      <div class="convertDropDown emailMe-dropdown">
                        <ul>

                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="firstDropdown">
                    <span>Converted to</span>
                    <div class="currency-dropDown">
                      <div class="currency-icon"><span>£</span></div>
                      <input class="amountInput" name="currency-rate-form-amount-input"
                        placeholder="Amount" autocomplete="off" type="text" value="1.1745" />
                      <div class="currencyFlag">
                        <div class="currencyFlagName">
                          <p>GBP</p>
                        </div>
                        <div class="currencyFlagImage">
                          <img src="https://flagcdn.com/w40/eu.png" data-flagxs="Flag"
                            alt="flag-img" />
                        </div>
                        <div class="dropDown-arrow">
                          <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark"
                            alt="arrow" />
                        </div>
                      </div>
                      <div class="convertDropDown goesAboveDropdown">
                        <ul>

                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="exchange-footer">
                    <button type="button" data-testid="live-exchange-rates-add-row-btn"
                      class="addCurrency-btn" fdprocessedid="6m8ob8">
                      <div class="addCurrency-btn-wrapper">
                        <img src="https://i.ibb.co/G38gnkmx/Icon.png" alt="plus" />Add currency
                        <svg font-size="m"
                          class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                          focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                          role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                          opacity="1" fill="#DB0011">
                          <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                          <path fill="none" d="M0 16V0h11v16z"></path>
                        </svg>
                      </div>
                    </button>
                    <div data-testid="live-exchange-rates-new-row" class="add-options">
                      <div class="exchange-dropdown firstDropdown">
                        <div class="currency-dropDown">
                          <label>Choose from currency</label>
                          <div class="currencyFlag">
                            <div class="currencyFlagName">
                              <p>GBP</p>
                            </div>
                            <div class="currencyFlagImage">
                              <img src="https://flagcdn.com/w40/gb.png" data-flagxs="Flag"
                                alt="flag-img" />
                            </div>
                            <div class="dropDown-arrow">
                              <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark"
                                alt="arrow" />
                            </div>
                          </div>
                          <div class="convertDropDown emailMe-dropdown exchangeRate-chooseFrom">
                            <ul>

                              <li data-flag="https://flagcdn.com/w40/us.png" data-code="USD">
                                <img src="https://flagcdn.com/w40/us.png" alt="USD Flag" />
                                USD - US Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/gb.png" data-code="GBP">
                                <img src="https://flagcdn.com/w40/gb.png" alt="GBP Flag" />
                                GBP - British Pound
                              </li>
                              <li data-flag="https://flagcdn.com/w40/eu.png" data-code="EUR"
                                class="list-disabled"><img
                                  src="https://flagcdn.com/w40/eu.png" alt="EUR Flag" />
                                EUR
                                - Euro</li>
                              <li data-flag="https://flagcdn.com/w40/jp.png" data-code="JPY">
                                <img src="https://flagcdn.com/w40/jp.png" alt="JPY Flag" />
                                JPY - Japanese Yen
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ca.png" data-code="CAD">
                                <img src="https://flagcdn.com/w40/ca.png" alt="CAD Flag" />
                                CAD - Canadian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ch.png" data-code="CHF">
                                <img src="https://flagcdn.com/w40/ch.png" alt="CHF Flag" />
                                CHF - Swiss Franc
                              </li>
                              <li data-flag="https://flagcdn.com/w40/no.png" data-code="NOK">
                                <img src="https://flagcdn.com/w40/no.png" alt="NOK Flag" />
                                NOK - Norwegian Krone
                              </li>
                              <li data-flag="https://flagcdn.com/w40/se.png" data-code="SEK">
                                <img src="https://flagcdn.com/w40/se.png" alt="SEK Flag" />
                                SEK - Swedish Krona
                              </li>
                              <li data-flag="https://flagcdn.com/w40/au.png" data-code="AUD">
                                <img src="https://flagcdn.com/w40/au.png" alt="AUD Flag" />
                                AUD - Australian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/nz.png" data-code="NZD">
                                <img src="https://flagcdn.com/w40/nz.png" alt="NZD Flag" />
                                NZD - New Zealand Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/hk.png" data-code="HKD">
                                <img src="https://flagcdn.com/w40/hk.png" alt="HKD Flag" />
                                HKD - Hong Kong Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/in.png" data-code="INR">
                                <img src="https://flagcdn.com/w40/in.png" alt="INR Flag" />
                                INR - Indian Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cn.png" data-code="CNH">
                                <img src="https://flagcdn.com/w40/cn.png" alt="CNH Flag" />
                                CNH - Chinese Yuan Renminbi
                                (Offshore)
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ae.png" data-code="AED">
                                <img src="https://flagcdn.com/w40/ae.png" alt="AED Flag" />
                                AED - UAE Dirham
                              </li>
                              <li data-flag="https://flagcdn.com/w40/al.png" data-code="ALL">
                                <img src="https://flagcdn.com/w40/al.png" alt="ALL Flag" />
                                ALL - Albanian Lek
                              </li>
                              <li data-flag="https://flagcdn.com/w40/am.png" data-code="AMD">
                                <img src="https://flagcdn.com/w40/am.png" alt="AMD Flag" />
                                AMD - Armenian Dram
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ar.png" data-code="ARS">
                                <img src="https://flagcdn.com/w40/ar.png" alt="ARS Flag" />
                                ARS - Argentine Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bb.png" data-code="BBD">
                                <img src="https://flagcdn.com/w40/bb.png" alt="BBD Flag" />
                                BBD - Barbados Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bd.png" data-code="BDT">
                                <img src="https://flagcdn.com/w40/bd.png" alt="BDT Flag" />
                                BDT - Bangladeshi Taka
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bg.png" data-code="BGN">
                                <img src="https://flagcdn.com/w40/bg.png" alt="BGN Flag" />
                                BGN - Bulgarian Lev
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bh.png" data-code="BHD">
                                <img src="https://flagcdn.com/w40/bh.png" alt="BHD Flag" />
                                BHD - Bahraini Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bm.png" data-code="BMD">
                                <img src="https://flagcdn.com/w40/bm.png" alt="BMD Flag" />
                                BMD - Bermudan Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bn.png" data-code="BND">
                                <img src="https://flagcdn.com/w40/bn.png" alt="BND Flag" />
                                BND - Brunei Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/br.png" data-code="BRL">
                                <img src="https://flagcdn.com/w40/br.png" alt="BRL Flag" />
                                BRL - Brazilian Real
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bs.png" data-code="BSD">
                                <img src="https://flagcdn.com/w40/bs.png" alt="BSD Flag" />
                                BSD - Bahamian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bw.png" data-code="BWP">
                                <img src="https://flagcdn.com/w40/bw.png" alt="BWP Flag" />
                                BWP - Botswana Pula
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cl.png" data-code="CLP">
                                <img src="https://flagcdn.com/w40/cl.png" alt="CLP Flag" />
                                CLP - Chilean Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cn.png" data-code="CNY">
                                <img src="https://flagcdn.com/w40/cn.png" alt="CNY Flag" />
                                CNY - Chinese Yuan Renminbi
                              </li>
                              <li data-flag="https://flagcdn.com/w40/co.png" data-code="COP">
                                <img src="https://flagcdn.com/w40/co.png" alt="COP Flag" />
                                COP - Colombian Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cz.png" data-code="CZK">
                                <img src="https://flagcdn.com/w40/cz.png" alt="CZK Flag" />
                                CZK - Czech Koruna
                              </li>
                              <li data-flag="https://flagcdn.com/w40/dk.png" data-code="DKK">
                                <img src="https://flagcdn.com/w40/dk.png" alt="DKK Flag" />
                                DKK - Danish Krone
                              </li>
                              <li data-flag="https://flagcdn.com/w40/dz.png" data-code="DZD">
                                <img src="https://flagcdn.com/w40/dz.png" alt="DZD Flag" />
                                DZD - Algerian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/eg.png" data-code="EGP">
                                <img src="https://flagcdn.com/w40/eg.png" alt="EGP Flag" />
                                EGP - Egyptian Pound
                              </li>
                              <li data-flag="https://flagcdn.com/w40/fj.png" data-code="FJD">
                                <img src="https://flagcdn.com/w40/fj.png" alt="FJD Flag" />
                                FJD - Fijian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/gh.png" data-code="GHS">
                                <img src="https://flagcdn.com/w40/gh.png" alt="GHS Flag" />
                                GHS - Ghanaian Cedi
                              </li>
                              <li data-flag="https://flagcdn.com/w40/hr.png" data-code="HRK">
                                <img src="https://flagcdn.com/w40/hr.png" alt="HRK Flag" />
                                HRK - Croatian Kuna
                              </li>
                              <li data-flag="https://flagcdn.com/w40/hu.png" data-code="HUF">
                                <img src="https://flagcdn.com/w40/hu.png" alt="HUF Flag" />
                                HUF - Hungarian Forint
                              </li>
                              <li data-flag="https://flagcdn.com/w40/id.png" data-code="IDR">
                                <img src="https://flagcdn.com/w40/id.png" alt="IDR Flag" />
                                IDR - Indonesian Rupiah
                              </li>
                              <li data-flag="https://flagcdn.com/w40/il.png" data-code="ILS">
                                <img src="https://flagcdn.com/w40/il.png" alt="ILS Flag" />
                                ILS - Israeli Shekel
                              </li>
                              <li data-flag="https://flagcdn.com/w40/jm.png" data-code="JMD">
                                <img src="https://flagcdn.com/w40/jm.png" alt="JMD Flag" />
                                JMD - Jamaican Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/jo.png" data-code="JOD">
                                <img src="https://flagcdn.com/w40/jo.png" alt="JOD Flag" />
                                JOD - Jordanian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ke.png" data-code="KES">
                                <img src="https://flagcdn.com/w40/ke.png" alt="KES Flag" />
                                KES - Kenyan Shilling
                              </li>
                              <li data-flag="https://flagcdn.com/w40/kr.png" data-code="KRW">
                                <img src="https://flagcdn.com/w40/kr.png" alt="KRW Flag" />
                                KRW - Korean Won
                              </li>
                              <li data-flag="https://flagcdn.com/w40/kw.png" data-code="KWD">
                                <img src="https://flagcdn.com/w40/kw.png" alt="KWD Flag" />
                                KWD - Kuwaiti Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ky.png" data-code="KYD">
                                <img src="https://flagcdn.com/w40/ky.png" alt="KYD Flag" />
                                KYD - Cayman Islands Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/kz.png" data-code="KZT">
                                <img src="https://flagcdn.com/w40/kz.png" alt="KZT Flag" />
                                KZT - Kazakhstani Tenge
                              </li>
                              <li data-flag="https://flagcdn.com/w40/lk.png" data-code="LKR">
                                <img src="https://flagcdn.com/w40/lk.png" alt="LKR Flag" />
                                LKR - Sri Lankan Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ls.png" data-code="LSL">
                                <img src="https://flagcdn.com/w40/ls.png" alt="LSL Flag" />
                                LSL - Lesotho Loti
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ma.png" data-code="MAD">
                                <img src="https://flagcdn.com/w40/ma.png" alt="MAD Flag" />
                                MAD - Moroccan Dirham
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mo.png" data-code="MOP">
                                <img src="https://flagcdn.com/w40/mo.png" alt="MOP Flag" />
                                MOP - Macanese Pataca
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mu.png" data-code="MUR">
                                <img src="https://flagcdn.com/w40/mu.png" alt="MUR Flag" />
                                MUR - Mauritian Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mw.png" data-code="MWK">
                                <img src="https://flagcdn.com/w40/mw.png" alt="MWK Flag" />
                                MWK - Malawian Kwacha
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mx.png" data-code="MXN">
                                <img src="https://flagcdn.com/w40/mx.png" alt="MXN Flag" />
                                MXN - Mexican Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/my.png" data-code="MYR">
                                <img src="https://flagcdn.com/w40/my.png" alt="MYR Flag" />
                                MYR - Malaysian Ringgit
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mz.png" data-code="MZN">
                                <img src="https://flagcdn.com/w40/mz.png" alt="MZN Flag" />
                                MZN - Mozambican Metical
                              </li>
                              <li data-flag="https://flagcdn.com/w40/na.png" data-code="NAD">
                                <img src="https://flagcdn.com/w40/na.png" alt="NAD Flag" />
                                NAD - Namibian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ng.png" data-code="NGN">
                                <img src="https://flagcdn.com/w40/ng.png" alt="NGN Flag" />
                                NGN - Nigerian Naira
                              </li>
                              <li data-flag="https://flagcdn.com/w40/om.png" data-code="OMR">
                                <img src="https://flagcdn.com/w40/om.png" alt="OMR Flag" />
                                OMR - Omani Rial
                              </li>
                              <li data-flag="https://flagcdn.com/w40/pe.png" data-code="PEN">
                                <img src="https://flagcdn.com/w40/pe.png" alt="PEN Flag" />
                                PEN - Peruvian Sol
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ph.png" data-code="PHP">
                                <img src="https://flagcdn.com/w40/ph.png" alt="PHP Flag" />
                                PHP - Philippine Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/pk.png" data-code="PKR">
                                <img src="https://flagcdn.com/w40/pk.png" alt="PKR Flag" />
                                PKR - Pakistani Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/pl.png" data-code="PLN">
                                <img src="https://flagcdn.com/w40/pl.png" alt="PLN Flag" />
                                PLN - Polish Złoty
                              </li>
                              <li data-flag="https://flagcdn.com/w40/qa.png" data-code="QAR">
                                <img src="https://flagcdn.com/w40/qa.png" alt="QAR Flag" />
                                QAR - Qatari Riyal
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ro.png" data-code="RON">
                                <img src="https://flagcdn.com/w40/ro.png" alt="RON Flag" />
                                RON - Romanian Leu
                              </li>
                              <li data-flag="https://flagcdn.com/w40/rs.png" data-code="RSD">
                                <img src="https://flagcdn.com/w40/rs.png" alt="RSD Flag" />
                                RSD - Serbian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ru.png" data-code="RUB">
                                <img src="https://flagcdn.com/w40/ru.png" alt="RUB Flag" />
                                RUB - Russian Ruble
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sa.png" data-code="SAR">
                                <img src="https://flagcdn.com/w40/sa.png" alt="SAR Flag" />
                                SAR - Saudi Riyal
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sc.png" data-code="SCR">
                                <img src="https://flagcdn.com/w40/sc.png" alt="SCR Flag" />
                                SCR - Seychellois Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sg.png" data-code="SGD">
                                <img src="https://flagcdn.com/w40/sg.png" alt="SGD Flag" />
                                SGD - Singapore Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sz.png" data-code="SZL">
                                <img src="https://flagcdn.com/w40/sz.png" alt="SZL Flag" />
                                SZL - Swazi Lilangeni
                              </li>
                              <li data-flag="https://flagcdn.com/w40/th.png" data-code="THB">
                                <img src="https://flagcdn.com/w40/th.png" alt="THB Flag" />
                                THB - Thai Baht
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tn.png" data-code="TND">
                                <img src="https://flagcdn.com/w40/tn.png" alt="TND Flag" />
                                TND - Tunisian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tr.png" data-code="TRY">
                                <img src="https://flagcdn.com/w40/tr.png" alt="TRY Flag" />
                                TRY - Turkish Lira
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tt.png" data-code="TTD">
                                <img src="https://flagcdn.com/w40/tt.png" alt="TTD Flag" />
                                TTD - Trinidad &amp; Tobago Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tw.png" data-code="TWD">
                                <img src="https://flagcdn.com/w40/tw.png" alt="TWD Flag" />
                                TWD - New Taiwan Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tz.png" data-code="TZS">
                                <img src="https://flagcdn.com/w40/tz.png" alt="TZS Flag" />
                                TZS - Tanzanian Shilling
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ug.png" data-code="UGX">
                                <img src="https://flagcdn.com/w40/ug.png" alt="UGX Flag" />
                                UGX - Uganda Shilling
                              </li>
                              <li data-flag="https://flagcdn.com/w40/uy.png" data-code="UYU">
                                <img src="https://flagcdn.com/w40/uy.png" alt="UYU Flag" />
                                UYU - Uruguayan Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/vn.png" data-code="VND">
                                <img src="https://flagcdn.com/w40/vn.png" alt="VND Flag" />
                                VND - Vietnamese Dong
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cm.png" data-code="XAF">
                                <img src="https://flagcdn.com/w40/cm.png" alt="XAF Flag" />
                                XAF - Central African CFA Franc
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ag.png" data-code="XCD">
                                <img src="https://flagcdn.com/w40/ag.png" alt="XCD Flag" />
                                XCD - East Caribbean Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sn.png" data-code="XOF">
                                <img src="https://flagcdn.com/w40/sn.png" alt="XOF Flag" />
                                XOF - Western African CFA Franc
                              </li>
                              <li data-flag="https://flagcdn.com/w40/za.png" data-code="ZAR">
                                <img src="https://flagcdn.com/w40/za.png" alt="ZAR Flag" />
                                ZAR - South African Rand
                              </li>
                              <li data-flag="https://flagcdn.com/w40/zm.png" data-code="ZMW">
                                <img src="https://flagcdn.com/w40/zm.png" alt="ZMW Flag" />
                                ZMW - Zambian Kwacha
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XAU">
                                <img src="https://flagcdn.com/w40/un.png" alt="XAU Flag" />
                                XAU - Gold
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XAG">
                                <img src="https://flagcdn.com/w40/un.png" alt="XAG Flag" />
                                XAG - Silver
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XPT">
                                <img src="https://flagcdn.com/w40/un.png" alt="XPT Flag" />
                                XPT - Platinum
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XPD">
                                <img src="https://flagcdn.com/w40/un.png" alt="XPD Flag" />
                                XPD - Palladium
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="exchange-dropdown firstDropdown">
                        <div class="currency-dropDown">
                          <label>Choose to currency</label>
                          <div class="currencyFlag">
                            <div class="currencyFlagName">
                              <p>EUR</p>
                            </div>
                            <div class="currencyFlagImage">
                              <img src="https://flagcdn.com/w40/eu.png" data-flagxs="Flag"
                                alt="flag-img" />
                            </div>
                            <div class="dropDown-arrow">
                              <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark"
                                alt="arrow" />
                            </div>
                          </div>
                          <div class="convertDropDown goesAboveDropdown exchangeRate-chooseTo">
                            <ul>

                              <li data-flag="https://flagcdn.com/w40/us.png" data-code="USD">
                                <img src="https://flagcdn.com/w40/us.png" alt="USD Flag" />
                                USD - US Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/gb.png" data-code="GBP"
                                class="list-disabled"><img
                                  src="https://flagcdn.com/w40/gb.png" alt="GBP Flag" />
                                GBP
                                - British Pound</li>
                              <li data-flag="https://flagcdn.com/w40/eu.png" data-code="EUR">
                                <img src="https://flagcdn.com/w40/eu.png" alt="EUR Flag" />
                                EUR - Euro
                              </li>
                              <li data-flag="https://flagcdn.com/w40/jp.png" data-code="JPY">
                                <img src="https://flagcdn.com/w40/jp.png" alt="JPY Flag" />
                                JPY - Japanese Yen
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ca.png" data-code="CAD">
                                <img src="https://flagcdn.com/w40/ca.png" alt="CAD Flag" />
                                CAD - Canadian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ch.png" data-code="CHF">
                                <img src="https://flagcdn.com/w40/ch.png" alt="CHF Flag" />
                                CHF - Swiss Franc
                              </li>
                              <li data-flag="https://flagcdn.com/w40/no.png" data-code="NOK">
                                <img src="https://flagcdn.com/w40/no.png" alt="NOK Flag" />
                                NOK - Norwegian Krone
                              </li>
                              <li data-flag="https://flagcdn.com/w40/se.png" data-code="SEK">
                                <img src="https://flagcdn.com/w40/se.png" alt="SEK Flag" />
                                SEK - Swedish Krona
                              </li>
                              <li data-flag="https://flagcdn.com/w40/au.png" data-code="AUD">
                                <img src="https://flagcdn.com/w40/au.png" alt="AUD Flag" />
                                AUD - Australian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/nz.png" data-code="NZD">
                                <img src="https://flagcdn.com/w40/nz.png" alt="NZD Flag" />
                                NZD - New Zealand Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/hk.png" data-code="HKD">
                                <img src="https://flagcdn.com/w40/hk.png" alt="HKD Flag" />
                                HKD - Hong Kong Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/in.png" data-code="INR">
                                <img src="https://flagcdn.com/w40/in.png" alt="INR Flag" />
                                INR - Indian Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cn.png" data-code="CNH">
                                <img src="https://flagcdn.com/w40/cn.png" alt="CNH Flag" />
                                CNH - Chinese Yuan Renminbi
                                (Offshore)
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ae.png" data-code="AED">
                                <img src="https://flagcdn.com/w40/ae.png" alt="AED Flag" />
                                AED - UAE Dirham
                              </li>
                              <li data-flag="https://flagcdn.com/w40/al.png" data-code="ALL">
                                <img src="https://flagcdn.com/w40/al.png" alt="ALL Flag" />
                                ALL - Albanian Lek
                              </li>
                              <li data-flag="https://flagcdn.com/w40/am.png" data-code="AMD">
                                <img src="https://flagcdn.com/w40/am.png" alt="AMD Flag" />
                                AMD - Armenian Dram
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ar.png" data-code="ARS">
                                <img src="https://flagcdn.com/w40/ar.png" alt="ARS Flag" />
                                ARS - Argentine Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bb.png" data-code="BBD">
                                <img src="https://flagcdn.com/w40/bb.png" alt="BBD Flag" />
                                BBD - Barbados Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bd.png" data-code="BDT">
                                <img src="https://flagcdn.com/w40/bd.png" alt="BDT Flag" />
                                BDT - Bangladeshi Taka
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bg.png" data-code="BGN">
                                <img src="https://flagcdn.com/w40/bg.png" alt="BGN Flag" />
                                BGN - Bulgarian Lev
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bh.png" data-code="BHD">
                                <img src="https://flagcdn.com/w40/bh.png" alt="BHD Flag" />
                                BHD - Bahraini Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bm.png" data-code="BMD">
                                <img src="https://flagcdn.com/w40/bm.png" alt="BMD Flag" />
                                BMD - Bermudan Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bn.png" data-code="BND">
                                <img src="https://flagcdn.com/w40/bn.png" alt="BND Flag" />
                                BND - Brunei Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/br.png" data-code="BRL">
                                <img src="https://flagcdn.com/w40/br.png" alt="BRL Flag" />
                                BRL - Brazilian Real
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bs.png" data-code="BSD">
                                <img src="https://flagcdn.com/w40/bs.png" alt="BSD Flag" />
                                BSD - Bahamian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/bw.png" data-code="BWP">
                                <img src="https://flagcdn.com/w40/bw.png" alt="BWP Flag" />
                                BWP - Botswana Pula
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cl.png" data-code="CLP">
                                <img src="https://flagcdn.com/w40/cl.png" alt="CLP Flag" />
                                CLP - Chilean Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cn.png" data-code="CNY">
                                <img src="https://flagcdn.com/w40/cn.png" alt="CNY Flag" />
                                CNY - Chinese Yuan Renminbi
                              </li>
                              <li data-flag="https://flagcdn.com/w40/co.png" data-code="COP">
                                <img src="https://flagcdn.com/w40/co.png" alt="COP Flag" />
                                COP - Colombian Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cz.png" data-code="CZK">
                                <img src="https://flagcdn.com/w40/cz.png" alt="CZK Flag" />
                                CZK - Czech Koruna
                              </li>
                              <li data-flag="https://flagcdn.com/w40/dk.png" data-code="DKK">
                                <img src="https://flagcdn.com/w40/dk.png" alt="DKK Flag" />
                                DKK - Danish Krone
                              </li>
                              <li data-flag="https://flagcdn.com/w40/dz.png" data-code="DZD">
                                <img src="https://flagcdn.com/w40/dz.png" alt="DZD Flag" />
                                DZD - Algerian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/eg.png" data-code="EGP">
                                <img src="https://flagcdn.com/w40/eg.png" alt="EGP Flag" />
                                EGP - Egyptian Pound
                              </li>
                              <li data-flag="https://flagcdn.com/w40/fj.png" data-code="FJD">
                                <img src="https://flagcdn.com/w40/fj.png" alt="FJD Flag" />
                                FJD - Fijian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/gh.png" data-code="GHS">
                                <img src="https://flagcdn.com/w40/gh.png" alt="GHS Flag" />
                                GHS - Ghanaian Cedi
                              </li>
                              <li data-flag="https://flagcdn.com/w40/hr.png" data-code="HRK">
                                <img src="https://flagcdn.com/w40/hr.png" alt="HRK Flag" />
                                HRK - Croatian Kuna
                              </li>
                              <li data-flag="https://flagcdn.com/w40/hu.png" data-code="HUF">
                                <img src="https://flagcdn.com/w40/hu.png" alt="HUF Flag" />
                                HUF - Hungarian Forint
                              </li>
                              <li data-flag="https://flagcdn.com/w40/id.png" data-code="IDR">
                                <img src="https://flagcdn.com/w40/id.png" alt="IDR Flag" />
                                IDR - Indonesian Rupiah
                              </li>
                              <li data-flag="https://flagcdn.com/w40/il.png" data-code="ILS">
                                <img src="https://flagcdn.com/w40/il.png" alt="ILS Flag" />
                                ILS - Israeli Shekel
                              </li>
                              <li data-flag="https://flagcdn.com/w40/jm.png" data-code="JMD">
                                <img src="https://flagcdn.com/w40/jm.png" alt="JMD Flag" />
                                JMD - Jamaican Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/jo.png" data-code="JOD">
                                <img src="https://flagcdn.com/w40/jo.png" alt="JOD Flag" />
                                JOD - Jordanian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ke.png" data-code="KES">
                                <img src="https://flagcdn.com/w40/ke.png" alt="KES Flag" />
                                KES - Kenyan Shilling
                              </li>
                              <li data-flag="https://flagcdn.com/w40/kr.png" data-code="KRW">
                                <img src="https://flagcdn.com/w40/kr.png" alt="KRW Flag" />
                                KRW - Korean Won
                              </li>
                              <li data-flag="https://flagcdn.com/w40/kw.png" data-code="KWD">
                                <img src="https://flagcdn.com/w40/kw.png" alt="KWD Flag" />
                                KWD - Kuwaiti Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ky.png" data-code="KYD">
                                <img src="https://flagcdn.com/w40/ky.png" alt="KYD Flag" />
                                KYD - Cayman Islands Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/kz.png" data-code="KZT">
                                <img src="https://flagcdn.com/w40/kz.png" alt="KZT Flag" />
                                KZT - Kazakhstani Tenge
                              </li>
                              <li data-flag="https://flagcdn.com/w40/lk.png" data-code="LKR">
                                <img src="https://flagcdn.com/w40/lk.png" alt="LKR Flag" />
                                LKR - Sri Lankan Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ls.png" data-code="LSL">
                                <img src="https://flagcdn.com/w40/ls.png" alt="LSL Flag" />
                                LSL - Lesotho Loti
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ma.png" data-code="MAD">
                                <img src="https://flagcdn.com/w40/ma.png" alt="MAD Flag" />
                                MAD - Moroccan Dirham
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mo.png" data-code="MOP">
                                <img src="https://flagcdn.com/w40/mo.png" alt="MOP Flag" />
                                MOP - Macanese Pataca
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mu.png" data-code="MUR">
                                <img src="https://flagcdn.com/w40/mu.png" alt="MUR Flag" />
                                MUR - Mauritian Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mw.png" data-code="MWK">
                                <img src="https://flagcdn.com/w40/mw.png" alt="MWK Flag" />
                                MWK - Malawian Kwacha
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mx.png" data-code="MXN">
                                <img src="https://flagcdn.com/w40/mx.png" alt="MXN Flag" />
                                MXN - Mexican Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/my.png" data-code="MYR">
                                <img src="https://flagcdn.com/w40/my.png" alt="MYR Flag" />
                                MYR - Malaysian Ringgit
                              </li>
                              <li data-flag="https://flagcdn.com/w40/mz.png" data-code="MZN">
                                <img src="https://flagcdn.com/w40/mz.png" alt="MZN Flag" />
                                MZN - Mozambican Metical
                              </li>
                              <li data-flag="https://flagcdn.com/w40/na.png" data-code="NAD">
                                <img src="https://flagcdn.com/w40/na.png" alt="NAD Flag" />
                                NAD - Namibian Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ng.png" data-code="NGN">
                                <img src="https://flagcdn.com/w40/ng.png" alt="NGN Flag" />
                                NGN - Nigerian Naira
                              </li>
                              <li data-flag="https://flagcdn.com/w40/om.png" data-code="OMR">
                                <img src="https://flagcdn.com/w40/om.png" alt="OMR Flag" />
                                OMR - Omani Rial
                              </li>
                              <li data-flag="https://flagcdn.com/w40/pe.png" data-code="PEN">
                                <img src="https://flagcdn.com/w40/pe.png" alt="PEN Flag" />
                                PEN - Peruvian Sol
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ph.png" data-code="PHP">
                                <img src="https://flagcdn.com/w40/ph.png" alt="PHP Flag" />
                                PHP - Philippine Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/pk.png" data-code="PKR">
                                <img src="https://flagcdn.com/w40/pk.png" alt="PKR Flag" />
                                PKR - Pakistani Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/pl.png" data-code="PLN">
                                <img src="https://flagcdn.com/w40/pl.png" alt="PLN Flag" />
                                PLN - Polish Złoty
                              </li>
                              <li data-flag="https://flagcdn.com/w40/qa.png" data-code="QAR">
                                <img src="https://flagcdn.com/w40/qa.png" alt="QAR Flag" />
                                QAR - Qatari Riyal
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ro.png" data-code="RON">
                                <img src="https://flagcdn.com/w40/ro.png" alt="RON Flag" />
                                RON - Romanian Leu
                              </li>
                              <li data-flag="https://flagcdn.com/w40/rs.png" data-code="RSD">
                                <img src="https://flagcdn.com/w40/rs.png" alt="RSD Flag" />
                                RSD - Serbian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ru.png" data-code="RUB">
                                <img src="https://flagcdn.com/w40/ru.png" alt="RUB Flag" />
                                RUB - Russian Ruble
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sa.png" data-code="SAR">
                                <img src="https://flagcdn.com/w40/sa.png" alt="SAR Flag" />
                                SAR - Saudi Riyal
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sc.png" data-code="SCR">
                                <img src="https://flagcdn.com/w40/sc.png" alt="SCR Flag" />
                                SCR - Seychellois Rupee
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sg.png" data-code="SGD">
                                <img src="https://flagcdn.com/w40/sg.png" alt="SGD Flag" />
                                SGD - Singapore Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sz.png" data-code="SZL">
                                <img src="https://flagcdn.com/w40/sz.png" alt="SZL Flag" />
                                SZL - Swazi Lilangeni
                              </li>
                              <li data-flag="https://flagcdn.com/w40/th.png" data-code="THB">
                                <img src="https://flagcdn.com/w40/th.png" alt="THB Flag" />
                                THB - Thai Baht
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tn.png" data-code="TND">
                                <img src="https://flagcdn.com/w40/tn.png" alt="TND Flag" />
                                TND - Tunisian Dinar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tr.png" data-code="TRY">
                                <img src="https://flagcdn.com/w40/tr.png" alt="TRY Flag" />
                                TRY - Turkish Lira
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tt.png" data-code="TTD">
                                <img src="https://flagcdn.com/w40/tt.png" alt="TTD Flag" />
                                TTD - Trinidad &amp; Tobago Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tw.png" data-code="TWD">
                                <img src="https://flagcdn.com/w40/tw.png" alt="TWD Flag" />
                                TWD - New Taiwan Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/tz.png" data-code="TZS">
                                <img src="https://flagcdn.com/w40/tz.png" alt="TZS Flag" />
                                TZS - Tanzanian Shilling
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ug.png" data-code="UGX">
                                <img src="https://flagcdn.com/w40/ug.png" alt="UGX Flag" />
                                UGX - Uganda Shilling
                              </li>
                              <li data-flag="https://flagcdn.com/w40/uy.png" data-code="UYU">
                                <img src="https://flagcdn.com/w40/uy.png" alt="UYU Flag" />
                                UYU - Uruguayan Peso
                              </li>
                              <li data-flag="https://flagcdn.com/w40/vn.png" data-code="VND">
                                <img src="https://flagcdn.com/w40/vn.png" alt="VND Flag" />
                                VND - Vietnamese Dong
                              </li>
                              <li data-flag="https://flagcdn.com/w40/cm.png" data-code="XAF">
                                <img src="https://flagcdn.com/w40/cm.png" alt="XAF Flag" />
                                XAF - Central African CFA Franc
                              </li>
                              <li data-flag="https://flagcdn.com/w40/ag.png" data-code="XCD">
                                <img src="https://flagcdn.com/w40/ag.png" alt="XCD Flag" />
                                XCD - East Caribbean Dollar
                              </li>
                              <li data-flag="https://flagcdn.com/w40/sn.png" data-code="XOF">
                                <img src="https://flagcdn.com/w40/sn.png" alt="XOF Flag" />
                                XOF - Western African CFA Franc
                              </li>
                              <li data-flag="https://flagcdn.com/w40/za.png" data-code="ZAR">
                                <img src="https://flagcdn.com/w40/za.png" alt="ZAR Flag" />
                                ZAR - South African Rand
                              </li>
                              <li data-flag="https://flagcdn.com/w40/zm.png" data-code="ZMW">
                                <img src="https://flagcdn.com/w40/zm.png" alt="ZMW Flag" />
                                ZMW - Zambian Kwacha
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XAU">
                                <img src="https://flagcdn.com/w40/un.png" alt="XAU Flag" />
                                XAU - Gold
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XAG">
                                <img src="https://flagcdn.com/w40/un.png" alt="XAG Flag" />
                                XAG - Silver
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XPT">
                                <img src="https://flagcdn.com/w40/un.png" alt="XPT Flag" />
                                XPT - Platinum
                              </li>
                              <li data-flag="https://flagcdn.com/w40/un.png" data-code="XPD">
                                <img src="https://flagcdn.com/w40/un.png" alt="XPD Flag" />
                                XPD - Palladium
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div class="timestamp">As of: 15:17:00, Wed Aug 21 2024 BST</div>
                <div class="currency-rate-contianer">
                  <div class="wrapper-elem">
                    <div class="rate-section">
                      <span class="rate-label">Rate</span>
                      <p class="start-rate">£1.0000 = €1.1853</p>
                    </div>
                    <div class="change-section">
                      <span class="change-label">Change <span>(24hr)</span></span>
                      <p class="change-value">0.19% <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 18" class="eihieud0 c-zone-173eg36 ejjze4h0" role="img">
                        <g id="controlPlay">
                          <rect width="4" height="6"></rect>
                          <path
                            d="M16 7.153L9 .151 2 7.153v1.696l6.4-6.4V18h1.2V2.449l6.4 6.4z">
                            <desc>Arrow up</desc>
                          </path>
                        </g>
                      </svg></p>
                    </div>
                    <div class="weekly-change-section">
                      <span class="weekly-change-label">Change <span>(7 days)</span></span>
                      <p class="weekly-change-value">0.25% <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 18" class="eihieud0 c-zone-173eg36 ejjze4h0" role="img">
                        <g id="controlPlay">
                          <rect width="4" height="6"></rect>
                          <path
                            d="M16 7.153L9 .151 2 7.153v1.696l6.4-6.4V18h1.2V2.449l6.4 6.4z">
                            <desc>Arrow up</desc>
                          </path>
                        </g>
                      </svg>
                      </p>
                    </div>
                  </div>
                  <div class="exchange-rate-tracker">
                    <div class="tracker-icon">
                      <img src="https://i.ibb.co/chN7pkqZ/Icon.png" alt="Track exchange rate" />
                    </div>
                    <p class="tracker-text">Track this exchange rate</p>
                  </div>
                </div>
                <div class="currency-change-view">
                  <div class="change-view-container">
                    <div class="change-view-title"><span>Change view</span></div>
                    <div class="change-view-options">
                      <div class="change-option"><span>24h</span></div>
                      <div class="change-option"><span>1 week</span></div>
                      <div class="change-option"><span>1 month</span></div>
                      <div class="change-option"><span>1 year</span></div>
                      <div class="change-option"><span>2 year</span></div>
                    </div>
                  </div>
                  <div class="previous-summary">
                    <div class="summary-title">Previous 7 days summary</div>
                    <div class="summary-details">
                      <div class="summary-item">
                        <span class="summary-label">Start</span>
                        <span class="summary-value">1.1880</span>
                      </div>
                      <div class="summary-item">
                        <span class="summary-label">Low</span>
                        <span class="summary-value">1.1863</span>
                      </div>
                      <div class="summary-item">
                        <span class="summary-label">High</span>
                        <span class="summary-value">1.1884</span>
                      </div>
                      <div class="summary-item">
                        <span class="summary-label">Change</span>
                        <span class="summary-value">-0.13%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="notice">Please note: Rates available to customers will be subject to additional
                  costs.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="main-container">
        <section data-testid="live-exchange-rates" data-nosnippet="true" class="exchangeRateSection">
          <div class="exchange-header">
            <div class="exchangetitles">
              <h2>Exchange rate watchlist</h2>
              <p>Customise this table to track the rates that you want to follow.</p>
            </div>
            <div class="exchange-timer">
              <div class="exchange-Icon">
                <svg class="clock" width="40" height="40" role="img" aria-labelledby="clockIconDesc">
                  <title id="clockIconDesc">Clock showing exchange rate refresh time</title>
                  <circle class="bg-circle" cx="20" cy="20" r="14"></circle>
                  <circle class="progress-circle" cx="20" cy="20" r="14"></circle>
                </svg>
              </div>
              <p class="exchange-timeText"><b></b> until rates refresh</p>
            </div>
          </div>
          <div class="exchange-center">
            <table>
              <thead>
                <tr data-testid="live-exchange-rates-header" class="exchangeTable-headings">
                  <th class="tableHeading">Currency pair</th>
                  <th class="tableHeading">Rate</th>
                  <th class="tableHeading change"><span>% Change</span> (24h)</th>
                  <th class="tableHeading chart"><span>Chart</span> (24h)</th>
                  <th class="tableHeading table-amount"><label
                    for="live-exchange-rates-header-amount-input"
                    class="tableAmount-label">Amount</label><input
                      id="live-exchange-rates-header-amount-input"
                      name="live-exchange-rates-header-amount-input"
                      data-testid="live-exchange-rates-header-amount-input" placeholder="Amount"
                      autocomplete="off" class="exchange-amountInput" type="text" value="1.0000" />
                  </th>
                  <th class="tableHeading"></th>
                </tr>
              </thead>
              <tbody style={{ position: 'relative' }}>
                <tr data-testid="live-exchange-rates-row-GBPUSD" class="exchange-tr">
                  <td class="exchange-td">
                    <div class="exchange-currency">
                      <span class="exchange-currency-name">GBP</span>
                      <span class="exchange-currency-symbol"></span>
                      <span class="exchange-currency-name">USD</span>
                      <span class="exchange-currency-symbol"></span>
                      <button type="button" aria-label="Invert currency pair" class="exchange-button">
                        <img src="https://i.ibb.co/mV9d9DWL/Dark.png" alt="Dark" />
                      </button>
                    </div>
                  </td>
                  <td class="exchange-td exchange-currency-rate">1.2655</td>
                  <td class="exchange-td exchange-rate-per" data-status="inProfit">
                    <span>+0.11%</span>
                  </td>
                  <td class="exchange-td">
                    <canvas id="live-exchange-rates-row-chart-GBPUSD" style={{ boxSizing: 'border-box', display: 'block', height: '35px', width: '230px' }}
                      width="609" height="132"></canvas>
                  </td>
                  <td class="exchange-td">
                    <span font-size="1.1875rem" font-weight="normal" width="46"
                      class="exchange-currency-amount">$</span>1.27&nbsp;USD
                  </td>
                  <td class="exchange-td">
                    <button type="button" data-testid="live-exchange-rates-row-chart-btn"
                      aria-label="Show GBPUSD conversion data" class="exchange-show-button">
                      <img src="https://i.ibb.co/HT3PhwXS/Dark-2.png" alt="chart" />
                    </button>
                    <button type="button" data-testid="live-exchange-rates-row-remove-btn"
                      aria-label="Remove" class="exchange-remove-button">
                      <img src="https://i.ibb.co/Xr8737kv/Dark-1.png" alt="remove" />
                    </button>
                  </td>
                </tr>
                <tr data-testid="live-exchange-rates-row-EURUSD" class="exchange-tr">
                  <td class="exchange-td">
                    <div class="exchange-currency" font-size="1.1875rem" font-weight="400">
                      <span class="exchange-currency-name">EUR</span>
                      <span class="exchange-currency-symbol"></span>
                      <span class="exchange-currency-name">USD</span>
                      <span class="exchange-currency-symbol"></span>
                      <button type="button" aria-label="Invert currency pair" class="exchange-button">
                        <img src="https://i.ibb.co/mV9d9DWL/Dark.png" alt="Dark" />
                      </button>
                    </div>
                  </td>
                  <td class="exchange-td exchange-currency-rate">1.0464</td>
                  <td class="exchange-td exchange-rate-per" data-status="inProfit">
                    <span>-0.31%</span>
                  </td>
                  <td class="exchange-td">
                    <canvas id="live-exchange-rates-row-chart-GBPUSD" style={{ boxSizing: 'border-box', display: 'block', height: '35px', width: '230px' }}
                      width="609" height="132"></canvas>
                  </td>
                  <td class="exchange-td">
                    <span font-size="1.1875rem" font-weight="normal" width="46"
                      class="exchange-currency-amount">$</span>1.05&nbsp;USD
                  </td>
                  <td class="exchange-td">
                    <button type="button" data-testid="live-exchange-rates-row-chart-btn"
                      aria-label="Show EURUSD conversion data" class="exchange-show-button">
                      <img src="https://i.ibb.co/HT3PhwXS/Dark-2.png" alt="chart" />
                    </button>
                    <button type="button" data-testid="live-exchange-rates-row-remove-btn"
                      aria-label="Remove" class="exchange-remove-button">
                      <img src="https://i.ibb.co/Xr8737kv/Dark-1.png" alt="remove" />
                    </button>
                  </td>
                </tr>
                <tr data-testid="live-exchange-rates-row-USDJPY" class="exchange-tr">
                  <td class="exchange-td">
                    <div class="exchange-currency" font-size=" 1.1875rem" font-weight="400">
                      <span class="exchange-currency-name">USD</span>
                      <span class="exchange-currency-symbol"></span>
                      <span class="exchange-currency-name">JPY</span>
                      <span class="exchange-currency-symbol"></span>
                      <button type="button" aria-label="Invert currency pair" class="exchange-button">
                        <img src="https://i.ibb.co/mV9d9DWL/Dark.png" alt="Dark" />
                      </button>
                    </div>
                  </td>
                  <td class="exchange-td exchange-currency-rate">
                    149.21
                  </td>
                  <td class="exchange-td exchange-rate-per" data-status="inLoss">
                    <span>-0.15%</span>
                  </td>
                  <td class="exchange-td">
                    <canvas id="live-exchange-rates-row-chart-GBPUSD" style={{ boxSizing: 'border-box', display: 'block', height: '35px', width: '230px' }}
                      width="609" height="132"></canvas>
                  </td>
                  <td class="exchange-td">
                    <span font-size="1.1875rem" font-weight="normal" width="46"
                      class="exchange-currency-amount">¥</span>149&nbsp;JPY
                  </td>
                  <td class="exchange-td">
                    <button type="button" data-testid="live-exchange-rates-row-chart-btn"
                      aria-label="Show USDJPY conversion data" class="exchange-show-button">
                      <img src="https://i.ibb.co/HT3PhwXS/Dark-2.png" alt="chart" />
                    </button>
                    <button type="button" data-testid="live-exchange-rates-row-remove-btn"
                      aria-label="Remove" class="exchange-remove-button">
                      <img src="https://i.ibb.co/Xr8737kv/Dark-1.png" alt="remove" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="exchange-footer">
            <button type="button" data-testid="live-exchange-rates-add-row-btn" class="addCurrency-btn">
              <div class="addCurrency-btn-wrapper">
                <img src="https://i.ibb.co/G38gnkmx/Icon.png" alt="plus" />Add currency
                <img src="https://i.ibb.co/gLS5DXS5/Dark-3.png" alt="Dark-3" />
              </div>
            </button>
            <div data-testid="live-exchange-rates-new-row" class="add-options">
              <div class="exchange-dropdown firstDropdown">
                <div class="currency-dropDown">
                  <label>Choose from currency</label>
                  <div class="currencyFlag">
                    <div class="currencyFlagName">
                      <p>EUR</p>
                    </div>
                    <div class="currencyFlagImage">
                      <img src="https://flagcdn.com/w40/eu.png" data-flagxs="Flag" alt="flag-img" />
                    </div>
                    <div class="dropDown-arrow">
                      <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark" alt="arrow" />
                    </div>
                  </div>
                  <div class="convertDropDown emailMe-dropdown exchangeRate-chooseFrom">
                    <ul>

                    </ul>
                  </div>
                </div>
              </div>
              <div class="exchange-dropdown firstDropdown">
                <div class="currency-dropDown">
                  <label>Choose to currency</label>
                  <div class="currencyFlag">
                    <div class="currencyFlagName">
                      <p>EUR</p>
                    </div>
                    <div class="currencyFlagImage">
                      <img src="https://flagcdn.com/w40/eu.png" data-flagxs="Flag" alt="flag-img" />
                    </div>
                    <div class="dropDown-arrow">
                      <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark" alt="arrow" />
                    </div>
                  </div>
                  <div class="convertDropDown goesAboveDropdown exchangeRate-chooseTo">
                    <ul>

                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="asofTime" data-testid="live-exchange-rates-last-update-timestamp">As of:
              10:38:00, Thu Feb 27 2025 GMT+5:30
            </div>
          </div>
        </section>

        <section class="promo-card__fx-trends">
          <div class="promo-card__left-section">
            <h2 class="promo-card__trend-heading">FX Trends</h2>
            <p class="promo-card__publish-date">Published: <span>25 November 2024</span></p>
            <div class="promo-card__content-container">
              <p>Time to consolidate; mindful of central bank meetings</p>
              <span>Key Takeaways</span>
              <ul class="promo-card__list">
                <li>The broad USD is likely to consolidate over the near term, as a lot of news is now in
                  the price</li>
                <li>December central bank meetings hold scope for surprises…</li>
                <li>…but in the end may not appear, which is why many G10 currencies may lapse into inertia
                </li>
              </ul>
              <p>Select a currency to get our tactical view:</p>
            </div>
            <div class="promo-card__tabs-wrapper">
              <div class="promo-card__tabs">
                <div class="promo-card__tab active">USD</div>
                <div class="promo-card__tab">EUR</div>
                <div class="promo-card__tab">GBP</div>
                <div class="promo-card__tab">JPY</div>
                <div class="promo-card__tab">CFH</div>
                <div class="promo-card__tab">CAD</div>
                <div class="promo-card__tab">AUD</div>
                <div class="promo-card__tab">NZD</div>
              </div>
              <div class="promo-card__tabs-content">
                <div class="short-term-direction">
                  <div class="country">
                    <h2>USD</h2><span class="logo"><img src="https://flagcdn.com/w40/us.png"
                      alt="logo" /></span>
                  </div>
                  <div class="short">Short term direction: <span>DXY^</span></div>
                  <div class="current-structure">
                    <div class="previous">Previous: <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 18" class="eihieud0 c-zone-kr4iqt ejjze4h0" role="img">
                      <g id="controlPlay">
                        <rect width="4" height="6"></rect>
                        <path d="M16 7.153L9 .151 2 7.153v1.696l6.4-6.4V18h1.2V2.449l6.4 6.4z">
                          <desc>Arrow sideways</desc>
                        </path>
                      </g>
                    </svg></div>
                    <div class="current">Current: <svg xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 18" class="eihieud0 c-zone-173eg36 ejjze4h0" role="img">
                      <g id="controlPlay">
                        <rect width="4" height="6"></rect>
                        <path d="M16 7.153L9 .151 2 7.153v1.696l6.4-6.4V18h1.2V2.449l6.4 6.4z">
                          <desc>Arrow up</desc>
                        </path>
                      </g>
                    </svg></div>
                  </div>
                </div>
                <div class="promo-card__para">
                  While we think the case for <b>USD strength through 2025 is robust, the USD may struggle
                    to extend
                    its gains into year-end
                    2024.</b> There is some uncertainty over <b>whether the Federal Reserve (Fed) will
                      cut at its
                      17-18 December policy,</b> so markets
                  will eye US data releases, like <b>non-farm payrolls (6 December)</b> and <b>CPI (11
                    December).</b>
                  Markets are now pricing in a c50%
                  chance of a 25bp cut in December (Bloomberg, 22 November 2024), while our economists
                  expect the Fed
                  to deliver its
                  second cut. However, if the cut happens, the decision is likely to come with some
                  hawkish elements,
                  like signalling a
                  possible policy pause. All this could send mixed signals to the USD, which is why
                  consolidation
                  seems more likely to
                  happen in the coming weeks.
                </div>
                <div class="accordion">
                  <div class="accordion-item">
                    <input type="checkbox" id="accordion1" />
                    <label for="accordion1" class="accordion-item-title"><span class="icon"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" role="img">
                      <g>
                        <rect data-name="Bounding box" width="18" height="18"></rect>
                        <polygon
                          points="17 4.2 9 12.19 1 4.2 1 5.89 9 13.89 17 5.89 17 4.2">
                        </polygon>
                      </g>
                    </svg></span>Explanation of
                      tactical views</label>
                    <div class="accordion-item-desc tactical-views">
                      <p>Note: ^DXY = US Dollar Index, is an index (or measure) of the value of the
                        USD against
                        major global currencies,
                        including the EUR, JPY, GBP, CAD, SEK and CHF. Source: HSBC</p>
                      <p><b>Table of tactical views where a currency pair is referenced </b>(e.g.
                        USD/JPY): An up
                        (<span class="info-icon info-icon--small up"><svg
                          xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                          focusable="false" class="fill v3" viewBox="0 0 18 18" role="img">
                          <path opacity=".25" fill="none" d="M0 0h18v18H0z"></path>
                          <path
                            d="M16 7.153L9 .151 2 7.153v1.696l6.4-6.4V18h1.2V2.449l6.4 6.4z">
                          </path>
                        </svg></span>) / down (<span
                          class="info-icon info-icon--small down"><svg
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            focusable="false" class="fill v3" viewBox="0 0 18 18" role="img">
                            <path opacity=".25" fill="none" d="M18 18H0V0h18z"></path>
                            <path
                              d="M2 10.847l7 7.002 7-7.002V9.151l-6.4 6.4V0H8.4v15.551L2 9.151z">
                            </path>
                          </svg></span>) / sideways (<span
                            class="info-icon info-icon--small "><svg
                              xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                              focusable="false" class="fill v3" viewBox="0 0 18 18" role="img">
                            <path opacity=".25" fill="none" d="M0 18V0h18v18z"></path>
                            <path
                              d="M10.847 2l7.002 7-7.002 7H9.151l6.4-6.4H0V8.4h15.551L9.151 2z">
                            </path>
                          </svg></span>) arrow indicates that the first currency quoted in the
                        pair is
                        expected by HSBC Global Research to
                        appreciate/depreciate/track sideways against the second currency quoted over
                        the coming
                        weeks. For example, an up
                        arrow against EUR/USD means that the EUR is expected to appreciate against
                        the USD over
                        the coming weeks. The arrows
                        under the “current” represent our current views, while those under
                        “previous” represent
                        our views in the last
                        month’s report.</p>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <input type="checkbox" id="accordion2" />
                    <label for="accordion2" class="accordion-item-title"><span class="icon"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" role="img">
                      <g>
                        <rect data-name="Bounding box" width="18" height="18"></rect>
                        <polygon
                          points="17 4.2 9 12.19 1 4.2 1 5.89 9 13.89 17 5.89 17 4.2">
                        </polygon>
                      </g>
                    </svg></span>Glossary of
                      terms</label>
                    <div class="accordion-item-desc glossary">
                      <p><b>Dovish </b>: Dovish refers to an economic outlook which generally supports
                        low
                        interest rates as a means of
                        encouraging growth within the economy.</p>
                      <p><b>Hawkish</b>: Hawkish is typically used to describe monetary policy which
                        favours
                        higher interest rates, and
                        tighter monetary controls to keep inflation in check.</p>
                      <p><b>MoM / YoY</b>: Month on month / Year on year.</p>
                      <p><b>PMI</b>: Purchasing Managers Index (PMI) is an indicator of economic
                        health of the
                        manufacturing sector
                        (&gt;50 represents expansion vs. the previous month).</p>
                      <p><b>IMM data</b>: International Monetary Market (IMM) is a division of the
                        Chicago
                        Mercantile Exchange (CME) that
                        deals with the trading of currencies and interest rate futures and options
                        and the IMM
                        data is part of the
                        Commitments of Traders (COT) reports published by the U.S. Commodity Futures
                        Trading
                        Commission (CFTC). The IMM
                        data provides a breakdown of each Tuesday’s open futures positions on the
                        IMM.
                        Speculative positions are a
                        trader’s non-commercial positions (i.e. not for hedging purposes).</p>
                      <p><b>G10</b>: G10 refers to the most heavily traded, liquid currencies in the
                        world: USD,
                        EUR, JPY, GBP, CHF, AUD,
                        NZD, CAD, NOK, and SEK.</p>
                      <p><b>Fed / FOMC</b>: Federal Reserve System (US’s Central Bank) / Federal Open
                        Market
                        Committee.</p>
                      <p><b>ECB</b>: European Central Bank (Eurozone’s Central Bank).</p>
                      <p><b>BoE</b>: Bank of England (UK’s Central Bank).</p>
                      <p><b>BoJ </b>: Bank of Japan (Japan’s Central Bank).</p>
                      <p><b>BoC</b>: Bank of Canada (Canada’s Central Bank).</p>
                      <p><b>RBA</b>: Reserve Bank of Australia (Australia’s Central Bank).</p>
                      <p><b>RBNZ</b>: Reserve Bank of New Zealand (New Zealand’s Central Bank).</p>
                      <p><b>SNB</b>: Swiss National Bank (Switzerland’s Central Bank).</p>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <input type="checkbox" id="accordion3" />
                    <label for="accordion3" class="accordion-item-title"><span class="icon"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" role="img">
                      <g>
                        <rect data-name="Bounding box" width="18" height="18"></rect>
                        <polygon
                          points="17 4.2 9 12.19 1 4.2 1 5.89 9 13.89 17 5.89 17 4.2">
                        </polygon>
                      </g>
                    </svg></span>Disclosure
                      Appendix</label>
                    <div class="accordion-item-desc disclosure">
                      <p>This publication has been prepared by HSBC Bank plc (“HBEU”) which is part of
                        the HSBC
                        Group. It is intended for
                        information purposes only and is not intended for further distribution
                        whether through
                        the press or via other
                        means. Nothing in this publication constitutes or is to be construed as an
                        offer to buy
                        or sell or a
                        solicitation of an offer to buy or sell the securities or other investment
                        products
                        mentioned in it and/or to
                        participate in any trading strategy. Information in this publication is
                        general and
                        should not be construed as
                        investment advice or guidance as it has been prepared without taking account
                        of the
                        objectives, financial
                        situation or needs of any particular investor. Investors should,
                        accordingly, before
                        acting on any information
                        contained herein, consider the appropriateness of the information having
                        regard to their
                        objectives, financial
                        situation and needs and should, if necessary, seek professional investment
                        and/or tax
                        advice.</p>
                      <p>Certain investment products mentioned in this publication may not be eligible
                        for sale in
                        some countries or
                        territories and may not be suitable for all types of investors. Investors
                        should consult
                        with their HSBC
                        representative regarding the suitability of any investment products
                        mentioned taking
                        into account their specific
                        investment objectives, financial situation and/or particular needs before
                        making a
                        commitment to purchase any
                        investment products. The value of and the income produced by investment
                        products
                        mentioned in this publication
                        may fluctuate so an investor may get back less than originally invested.
                        Certain
                        high-volatility investments can
                        be subject to sudden and/or large falls in value that could equal or exceed
                        the amount
                        invested. Value and
                        income from investment products may be adversely affected by exchange rates,
                        interest
                        rates, or other factors.
                        Past performance of a particular investment product is not indicative of
                        future results.
                        When an investment is
                        denominated in a currency other than the local currency of an investor,
                        changes in the
                        exchange rates may have
                        an adverse effect on the value, price or income of that investment. Where
                        there is no
                        recognised market for an
                        investment, it may be difficult for an investor to sell the investment or to
                        obtain
                        reliable information about
                        its value or the extent of the risk associated with it.</p>
                      <p>This publication may contain forward-looking statements which are, by their
                        nature,
                        subject to significant risks
                        and uncertainties. Any such statements are projections and are used for
                        illustration
                        purpose only. Customers are
                        reminded that there can be no assurance that economic conditions described
                        herein will
                        remain in the future.
                        Actual results may differ materially from the forecasts and/or estimates. No
                        assurance
                        is given that
                        expectations reflected in any forward-looking statements will prove to have
                        been correct
                        or come to fruition,
                        and you are cautioned not to place undue reliance on such statements. No
                        obligation is
                        undertaken to publicly
                        update or revise any forward-looking statements contained in this
                        publication or in any
                        other related
                        publication whether as a result of new information, future events or
                        otherwise.</p>
                      <p>This publication is distributed by HBEU, its affiliates and its associated
                        entities
                        (together, the “HBEU
                        entities”) to their customers. No HBEU entity is responsible for any loss,
                        damage or
                        other consequence of any
                        kind that may be incurred or suffered as a result of, arising from, or
                        relating to any
                        use or reliance on this
                        publication. No HBEU entity gives any guarantee as to the accuracy,
                        timeliness or
                        completeness of this
                        publication. Whether, or in what time frame, an update of any information
                        contained
                        herein will be published is
                        not determined in advance. You should consult your own professional advisor
                        if you have
                        any questions regarding
                        the content of this publication.</p>
                      <p>HBEU entities and their respective officers and/or employees may have
                        interests in any
                        products referred to in
                        this publication by acting in various roles including as distributor, holder
                        of
                        principal positions, adviser or
                        lender. HBEU entities and their respective officers and employees may
                        receive fees,
                        brokerage or commissions for
                        acting in those capacities. In addition, HBEU entities and their respective
                        officers
                        and/or employees may buy or
                        sell products as principal or agent and may effect transactions which are
                        not consistent
                        with the information
                        set out in this publication.</p>
                      <h4>Additional disclosures</h4>
                      <ol class="list">
                        <li>This publication is dated as at 24 January 2025.</li>
                        <li>All market data included in this publication is dated as at close 23
                          January 2025,
                          unless a different date
                          and/or a specific time of day is indicated in the publication.</li>
                        <li>HBEU has procedures in place to identify and manage any potential
                          conflicts of
                          interest that arise in
                          connection with its research business. HBEU’s analysts and its other
                          staff who are
                          involved in the
                          preparation and dissemination of research operate and have a management
                          reporting
                          line independent of HBEU’s
                          investment business. Information barrier procedures are in place between
                          the
                          investment banking, principal
                          trading and research businesses to ensure that any confidential and/or
                          price
                          sensitive information is
                          handled in an appropriate manner.</li>
                        <li>Recipients of this publication are not permitted to use, for reference,
                          any data in
                          this publication for the
                          purpose of (i) determining the interest payable, or other sums due,
                          under loan
                          agreements or under other
                          financial contracts or instruments, (ii) determining the price at which
                          a financial
                          instrument may be
                          bought, sold, traded or redeemed, or the value of a financial
                          instrument, and/or
                          (iii) measuring the
                          performance of a financial instrument.</li>
                      </ol>
                    </div>
                  </div>

                  <div class="accordion-item">
                    <input type="checkbox" id="accordion4" />
                    <label for="accordion4" class="accordion-item-title"><span class="icon"><svg
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" role="img">
                      <g>
                        <rect data-name="Bounding box" width="18" height="18"></rect>
                        <polygon
                          points="17 4.2 9 12.19 1 4.2 1 5.89 9 13.89 17 5.89 17 4.2">
                        </polygon>
                      </g>
                    </svg></span>Disclaimers</label>
                    <div class="accordion-item-desc disclaimer">
                      <h4>Africa:</h4>
                      <p>1 In South Africa, this publication is distributed through HBEU’s registered
                        branch in
                        South Africa being HSBC
                        Bank plc Johannesburg Branch, Registration Number 2003/004613/10 (Financial
                        Services
                        Provider Number: 43940) of
                        1 Mutual Place, 107 Rivonia Road, Sandton, 2196.</p>
                      <h4>Americas:</h4>
                      <p>1 In Bermuda, this publication is distributed by HSBC Bank Bermuda Limited of
                        37 Front
                        Street, Hamilton, Bermuda,
                        which is licensed to conduct Banking and Investment Business by the Bermuda
                        Monetary
                        Authority. 2 In the United
                        States, this document is distributed by HSBC Securities (USA) Inc. ("HSI")
                        to its
                        customers. HSI is a member of
                        the HSBC Group, the NYSE and FINRA. 3 In Canada, this material is
                        distributed by HSBC
                        Bank Canada and its
                        affiliates.</p>
                      <h4>Asia Pacific:</h4>
                      <p>1 In Australia, this publication has been distributed by HSBC Bank Australia
                        Limited (ABN
                        48 006434 162, AFSL No.
                        232595) only, for the general information of its clients. Any reference in
                        this
                        publication to other HSBC Group
                        entities shall not be taken to mean that such entities has a presence in or
                        are licensed
                        in Australia, or that
                        such entities are offering to do business and/or enter into transactions
                        with persons
                        located in Australia. 2 In
                        Bangladesh, this publication is distributed by The Hongkong and Shanghai
                        Banking
                        Corporation Limited (“HBAP”),
                        Bangladesh branch. 3 In mainland China, this publication is distributed by
                        HSBC Bank
                        (China) Company Limited
                        (“HBCN”) to its customers. 4 In Hong Kong, this publication is distributed
                        by HBAP to
                        its customers for general
                        reference and information purposes only. 5 In India, this publication is
                        distributed by
                        HBAP, India branch, to
                        its customers for general reference and information purposes only. 6 In New
                        Zealand,
                        this publication is
                        distributed by HBAP, incorporated in the Hong Kong SAR, acting through its
                        New Zealand
                        branch. 7 In Singapore,
                        this publication is distributed by HBAP, Singapore branch (“HBAP, Singapore
                        branch”) to
                        institutional investors
                        or other persons specified in Sections 274 and 304 of the Securities and
                        Futures Act
                        (Chapter 289) (“SFA”) and
                        accredited investors and other persons in accordance with the conditions
                        specified in
                        Sections 275 and 305 of
                        the SFA. For recipients which are not institutional investors, accredited
                        investors or
                        expert investors as
                        defined in the SFA, this is distributed pursuant to Regulation 32C of the
                        Financial
                        Advisers Regulations
                        (“FAR”). HBAP, Singapore branch, accepts legal responsibility for the
                        contents of the
                        publication pursuant to
                        Regulation 32C(1)(d) of the FAR. This publication is not a prospectus as
                        defined in the
                        SFA. HBAP, Singapore
                        branch, is regulated by the Monetary Authority of Singapore. Recipients
                        should contact
                        an HBAP, Singapore branch
                        representative in respect of any matters arising from or in connection with
                        this
                        publication and refer to the
                        contact details at www.business.hsbc.com.sg. 8 In Sri Lanka, this
                        publication is
                        distributed by HBAP, Sri Lanka
                        branch to its customers.</p>
                      <h4>Europe:</h4>
                      <p>1 For clients of HSBC Continental Europe and HSBC Continental Europe
                        branches, this
                        publication is distributed by
                        HSBC Continental Europe. HSBC Continental Europe is an « Etablissement de
                        crédit et
                        prestataire de services
                        d’investissement» authorized by the « Autorité de Contrôle Prudentiel et de
                        Résolution »
                        (ACPR) and the European
                        Central Bank (ECB). It is regulated by the « Autorité des Marchés Financiers
                        » (AMF),
                        the ACPR and the ECB. 2 In
                        Malta, this publication is distributed by HBEU and is being made accessible
                        to customers
                        of HSBC Bank Malta
                        p.l.c. (“HBMT”). HBMT is registered in Malta with company number C-3177 and
                        is licenced
                        to conduct investment
                        business by the Malta Financial Services Authority. 3 In Switzerland this
                        publication is
                        distributed by HBEU to
                        its customers. 4 In the UK and CIIOM, this publication is distributed by
                        HBEU to its
                        customers and by HSBC Bank
                        UK plc (“HBUK”) to its customers. HBEU is registered in England and Wales
                        (company
                        number: 14259), registered
                        office: 8 Canada Square, London, E14 5HQ, UK. HBUK is registered in England
                        and Wales
                        (company number:
                        09928412), registered office: 1 Centenary Square, Birmingham B1 1HQ, UK.
                        HBEU is
                        authorised by the Prudential
                        Regulation Authority and regulated by the Financial Conduct Authority and
                        the Prudential
                        Regulation Authority
                        (Financial Services Register number: 114216). HBUK is authorised by the
                        Prudential
                        Regulation Authority and
                        regulated by the Financial Conduct Authority and the Prudential Regulation
                        Authority
                        (Financial Services
                        Register number: 765112).</p>
                      <h4>Middle East:</h4>
                      <p>1 In Algeria, Bahrain, Kuwait, Qatar, the United Arab Emirates (the “UAE”)
                        and the Dubai
                        International Financial
                        Centre (the “DIFC”), this publication is distributed by HSBC Bank Middle
                        East Limited
                        (“HBME”) to its customers.
                        HBME is registered in the DIFC with company registration number 2199 and its
                        registered
                        office at Level 1,
                        Building No. 8, Gate Village, DIFC, PO Box 66, Dubai, DIFC and is lead
                        regulated by the
                        Dubai Financial Services
                        Authority. HBME operates in Algeria through its Algeria branch at Algeria
                        Business
                        Center, Pins Maritimes, El
                        Mohammadia, 16212 Algiers, Algeria (commercial licence number: 07 C
                        0974997), which is
                        regulated by the Central
                        Bank of Algeria (Banque d’Algérie) and lead regulated by the DFSA. HBME
                        operates in
                        Bahrain through its branch
                        at PO Box 57, Building 2505, Road 2832, Seef 428, Manama, Kingdom of Bahrain
                        (commercial
                        registration number
                        330-1), which is regulated by the Central Bank of Bahrain and lead regulated
                        by the
                        DFSA. HBME operates in
                        Kuwait through its branch at Kharafi Tower, Qibla Area, Hamad Al-Saqr
                        Street, PO Box
                        1683, Safat 13017, Kuwait
                        (Ministry of Commerce and Industry branch licence number SP2005/4), which is
                        regulated
                        by the Central Bank of
                        Kuwait, the Capital Markets Authority for licenced Securities Activities and
                        lead
                        regulated by the DFSA. HBME
                        operates in Qatar through its branch at PO Box 57, Doha, Qatar (trade
                        licence number
                        6374), which is regulated
                        by the Qatar Central Bank and lead regulated by the DFSA. HBME operates in
                        Dubai through
                        its branch at HSBC
                        Tower, Downtown, PO Box 66, Dubai, UAE (Chamber of Commerce and Industry
                        branch licence
                        number 617987), which is
                        regulated by the Central Bank of the UAE and lead regulated by the DFSA. 2
                        In Egypt,
                        this publication is
                        distributed by HSBC Bank Egypt SAE to its customers. HSBC Bank SAE is
                        registered in
                        Egypt (commercial
                        registration number: 218992) with registered office: 306 Cornish El Niel,
                        HSBC Bank
                        Egypt SAE, Maadi, Cairo,
                        Egypt. Regulated by the Central Bank of Egypt. 3 In Turkey, this publication
                        is
                        distributed by HSBC Bank A.S. to
                        its customers. HSBC Bank A.S. is registered in Turkey (commercial register
                        number
                        268376) with registered
                        office: Esentepe Mah. Büyükdere Cad. No. 128, Şişli 34394, Istanbul, Turkey.
                        Regulated
                        by the Banking Regulatory
                        and Supervisory Agency. 4 In Oman, this publication is distributed by HSBC
                        Bank Oman
                        SAOG to its customers. HSBC
                        Bank Oman SAOG is registered in Oman (commercial registration number:
                        1/08084/9) with
                        registered office: Head
                        Office Building, PO Box 1727, Seeb, PC 111, Sultanate of Oman. Regulated by
                        the Central
                        Bank of Oman and the
                        Capital Market Authority of Oman. 5 In the Kingdom of Saudi Arabia, this
                        publication is
                        distributed by The Saudi
                        British Bank to its customers. The Saudi British Bank is registered in the
                        Kingdom of
                        Saudi Arabia (commercial
                        registration number: 1010025779), registered office: Head Office, PO Box
                        9084, Riyadh
                        11413, Kingdom of Saudi
                        Arabia. Regulated by the Saudi Arabian Monetary Authority.</p>
                      <p>© Copyright 2024. HSBC Bank plc, ALL RIGHTS RESERVED. No part of this
                        publication may be
                        reproduced, stored in a
                        retrieval system, or transmitted in any form or by any means, whether
                        electronic,
                        mechanical, photocopying,
                        recording or otherwise, without the prior written permission of HSBC Bank
                        plc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="promo-card__right-section">
            <div class="promo-card__video">
              <h2>FX in 60 seconds</h2>
              <iframe
                src="https://players.brightcove.net/1311491902001/KQkXl4lQd_default/index.html?playlistId=1805634502603502368"
                width="560" height="315" frameborder="0" allowfullscreen>
              </iframe>
              <p>FX - The week in 60 seconds</p>
              <div class="promo-card__date">
                <span>08 Jan 2025</span><span>24 min</span>
              </div>
            </div>
            <div class="promo-card__podcasts">
              <h2>Podcasts</h2>
              <p>Listen and subscribe to podcasts from our Global Research Department on economics trends and
                themes
                across the world</p>
              <div class="promo-card__audio">
                <div class="promo-card__audio-box">
                  <div class="promo__image">
                    <div class="wave"><img src="https://i.ibb.co/GfknfwSH/Sound-wave.png" alt="wave" />
                    </div>
                    <div class="pause"><img src="https://i.ibb.co/PGx9wXf2/Default.png" alt="pause" />
                    </div>
                  </div>
                  <h2>The Macro Brief</h2>
                  <div class="promo-card__date">
                    <span>08 Jan 2025</span><span>24 min</span>
                  </div>
                </div>
                <div class="promo-card__audio-box">
                  <div class="promo__image">
                    <div class="wave"><img src="https://i.ibb.co/GfknfwSH/Sound-wave.png" alt="wave" />
                    </div>
                    <div class="pause"><img src="https://i.ibb.co/PGx9wXf2/Default.png" alt="pause" />
                    </div>
                  </div>
                  <h2>The Macro Brief</h2>
                  <div class="promo-card__date">
                    <span>08 Jan 2025</span><span>24 min</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="logo-container">
              <a href="https://podcasts.apple.com/hk/podcast/the-macro-brief-by-hsbc-global-research/id1690393154?l=en-GB"
                accesskey="a"><img alt="Listen on Apple Podcasts" width="222" height="54"
                  src="https://www.gbm.hsbc.com/-/jssmedia/media/gbm-global/images/campaign/apple.png?h=80&amp;amp;iar=0&amp;amp;w=333&amp;amp;hash=DA19790F3D058BC241F58F6CFBA6735C"
                /></a>

              <a href="https://open.spotify.com/show/7fud1Dmg6ZHMPl4aPgkon0?si=UZF6QiHjS0WFLZRH2kTH6A"
                accesskey="s"><img alt="Listen on Spotify" width="222" height="54"
                  src="https://www.gbm.hsbc.com/-/jssmedia/media/gbm-global/images/campaign/spotify.png?h=80&amp;amp;iar=0&amp;amp;w=333&amp;amp;hash=A67ED795293C0AFB8DAD094CCEBB8DB2"
                /></a>
            </div>
          </div>
        </section>

        <section class="getNotified-form">
          <div class="formContent">
            <div class="form-header">
              <h2 class="formTitle">Get notified of a better rate</h2>
              <p>Receive email alerts when you’re chosen currencies reach a better rate. </p>
            </div>
            <div class="form-center">
              <div class="firstDropdown">
                <span>Email me when</span>
                <div class="currency-dropDown">
                  <input id="currencyAmount" class="amountInput" name="currency-rate-form-amount-input"
                    placeholder="Amount" autocomplete="off" type="text" value="1.0000" />
                  <div class="currencyFlag">
                    <div class="currencyFlagName">
                      <p>GBP</p>
                    </div>
                    <div class="currencyFlagImage">
                      <img src="https://flagcdn.com/w40/gb.png" data-flagxs="Flag" alt="flag-img" />
                    </div>
                    <div class="dropDown-arrow">
                      <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark" alt="arrow" />
                    </div>
                  </div>
                  <div class="convertDropDown emailMe-dropdown">
                    <ul>

                    </ul>
                  </div>
                </div>
                <p class="amount-error">Please provide a valid number</p>
              </div>
              <div class="firstDropdown">
                <span>Goes above</span>
                <div class="currency-dropDown">
                  <input class="amountInput" name="currency-rate-form-amount-input" placeholder="Amount"
                    autocomplete="off" type="text" value="1.1745" />
                  <div class="currencyFlag">
                    <div class="currencyFlagName">
                      <p>EUR</p>
                    </div>
                    <div class="currencyFlagImage">
                      <img src="https://flagcdn.com/w40/eu.png" data-flagxs="Flag" alt="flag-img" />
                    </div>
                    <div class="dropDown-arrow">
                      <img src="https://i.ibb.co/XxySGd66/Dark.png" data-flagxs="Dark" alt="arrow" />
                    </div>
                  </div>
                  <div class="convertDropDown goesAboveDropdown">
                    <ul>

                    </ul>
                  </div>
                </div>
                <p class="amount-error">Please provide a valid number</p>
              </div>
            </div>
            <div class="form-checkbox">
              <input type="checkbox" />
              <label>Receive daily updates for this currency pair </label>
            </div>
            <div class="form-bottom">
              <span>Email address</span>
              <div class="emailField">
                <div class="email-container">
                  <input placeholder="name.surname@gmail.com" autocomplete="off" type="text" />
                  <p class="email-error">Please provide a valid email</p>
                </div>
                <button class="receive">Receive rate alerts</button>
              </div>
            </div>
          </div>
          <div class="formImage">
            <img src="https://i.ibb.co/zTXS5rDK/Frame-12.png" data-flagxs="Frame-12" alt="form-frame" />
          </div>
        </section>

        <section class="ourProductSection">
          <div class="ourProduct-header">
            <h2 class="ourProductsTitle">Our products</h2>
            <a class="talkToExpert">Talk to an expert</a>
          </div>
          <div class="ouProductSlider swiper-container">
            <div class="ourProduct-wrapper swiper-wrapper">
              <a href="/en-gb/products/kinetic" class="productImage swiper-slide">
                <div class="ourProduct-image"><img
                  src="https://www.business.hsbc.uk/-/jssmedia/media/uk/images/products/kinetic-tile-image.jpg?h=740&iar=0&w=980&hash=A3C242F47C408988C1287670B30E5E71"
                  alt="product-img" />
                </div>
                <div class="ourProductOverlay"></div>
                <div class="ourProduct-content">
                  <div class="ourProduct-title">
                    <div class="ourProduct-logo"><img
                      src="https://www.business.hsbc.com/-/jssmedia//media/global/images/articles/icon-1.png"
                      alt="product-logo" />
                    </div> HSBC Kinetic
                  </div>
                  <div class="product-para">App-based business bank account <span display="inline-flex"
                    class="Box-sc-qbwqq9-0 Icon__IconWrapper-sc-y4p3lz-0 erWeuT Icon elementFactory-sc-1x7bzkf-0 kcGiXm"
                    data-testid="Icon-ChevronRightThick" data-trackid="Icon-ChevronRightThick@1.5.0"
                    mode="light" direction="right"><svg font-size="m"
                      class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                      focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                      role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                      opacity="1" fill="#DB0011">
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                      <path fill="none" d="M0 16V0h11v16z"></path>
                    </svg></span>
                  </div>
                  <div class="product-des">If you’re a sole trader or single director
                    shareholder
                    business, HSBC Kinetic may be right for you. Apply in minutes, in-app. Most
                    accounts
                    opened within 48hrs.</div>
                </div>
              </a>
              <a href="/en-gb/products/small-business-bank-account" class="productImage swiper-slide">
                <div class="ourProduct-image"><img
                  src="https://www.business.hsbc.uk/-/jssmedia/media/uk/images/products/start-up-business-bank-account-tile.jpg?h=487&iar=0&w=384&hash=CD37AA46C2E633EE711668E969C7E811"
                  alt="product-img" />
                </div>
                <div class="ourProductOverlay"></div>
                <div class="ourProduct-content">
                  <div class="ourProduct-title">
                    <div class="ourProduct-logo">
                      <img src="https://www.business.hsbc.com/-/jssmedia//media/global/images/articles/icon-2.png"
                        alt="product-logo" />
                    </div>Small Business Account
                  </div>
                  <div class="product-para">Everyday banking for small enterprises <span
                    display="inline-flex"
                    class="Box-sc-qbwqq9-0 Icon__IconWrapper-sc-y4p3lz-0 erWeuT Icon elementFactory-sc-1x7bzkf-0 kcGiXm"
                    data-testid="Icon-ChevronRightThick" data-trackid="Icon-ChevronRightThick@1.5.0"
                    mode="light" direction="right"><svg font-size="m"
                      class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                      focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                      role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                      opacity="1" fill="#DB0011">
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                      <path fill="none" d="M0 16V0h11v16z"></path>
                    </svg></span>
                  </div>
                  <div class="product-des"> Our business account for eligible startups, small
                    businesses and switchers gives you access to free accounting tools, our
                    network of
                    business specialists, and a range of borrowing solutions*** to suit you.
                    Join us and
                    get free banking for 12 months*.</div>
                </div>
              </a>
              <a href="https://www.business.hsbc.uk/en-gb/products/business-banking-account"
                class="productImage swiper-slide">
                <div class="ourProduct-image"><img
                  src="https://www.business.hsbc.uk/-/jssmedia/media/uk/images/products/switching-business-bank-accounts-tile.jpg?h=487&iar=0&w=384&hash=E7A9C34E414F43CDED7908AE92BA716A"
                  alt="product-img" />
                </div>
                <div class="ourProductOverlay"></div>
                <div class="ourProduct-content">
                  <div class="ourProduct-title">
                    <div class="ourProduct-logo">
                      <img src="https://i.ibb.co/5XqnknYb/Icon-1.png" alt="product-logo" />
                    </div>Business Banking Account
                  </div>
                  <div class="product-para">Banking & loans over £100k <span display="inline-flex"
                    class="Box-sc-qbwqq9-0 Icon__IconWrapper-sc-y4p3lz-0 erWeuT Icon elementFactory-sc-1x7bzkf-0 kcGiXm"
                    data-testid="Icon-ChevronRightThick" data-trackid="Icon-ChevronRightThick@1.5.0"
                    mode="light" direction="right"><svg font-size="m"
                      class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                      focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                      role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                      opacity="1" fill="#DB0011">
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                      <path fill="none" d="M0 16V0h11v16z"></path>
                    </svg></span>
                  </div>
                  <div class="product-des"> If you operate a small or medium enterprise with
                    more
                    complex transactional banking and borrowing needs over £100k, then our
                    Business
                    Banking Account offers the knowledge and expertise of our dedicated
                    Relationship
                    Managers that can help you grow your business in the way that’s right for
                    you.</div>
                </div>
              </a>
              <a href="https://www.business.hsbc.com/en-gb/campaigns/international-business"
                class="productImage swiper-slide">
                <div class="ourProduct-image"><img
                  src="https://www.business.hsbc.com.my/-/jssmedia/media/malaysia/images/generic/international-business/international-business-text-image-2.jpg?h=312&iar=0&w=488&hash=2EA283F0107F5B238529AACB201B43EA"
                  alt="product-img" />
                </div>
                <div class="ourProductOverlay"></div>
                <div class="ourProduct-content">
                  <div class="ourProduct-title">
                    <div class="ourProduct-logo">
                      <img src="https://www.business.hsbc.com/-/jssmedia//media/global/images/articles/icon-2.png"
                        alt="product-logo" />
                    </div>Small Business Account
                  </div>
                  <div class="product-para">Everyday banking for small enterprises <span
                    display="inline-flex"
                    class="Box-sc-qbwqq9-0 Icon__IconWrapper-sc-y4p3lz-0 erWeuT Icon elementFactory-sc-1x7bzkf-0 kcGiXm"
                    data-testid="Icon-ChevronRightThick" data-trackid="Icon-ChevronRightThick@1.5.0"
                    mode="light" direction="right"><svg font-size="m"
                      class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                      focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                      role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                      opacity="1" fill="#DB0011">
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                      <path fill="none" d="M0 16V0h11v16z"></path>
                    </svg></span>
                  </div>
                  <div class="product-des"> Business is rarely a straight line. Wherever it
                    takes you,
                    you
                    can count on HSBC to connect you to deep and expansive networks,
                    cross-border
                    knowledge and local understanding, to help you grow globally with
                    confidence.</div>
                </div>
              </a>
            </div>
            <div class="swiper-pagination pagination"></div>
          </div>
          <div class="swiper-button-next next-btn"></div>
          <div class="swiper-button-prev prev-btn"></div>
        </section>
        <section class="multiaward-sectionContainer">
          <h2 class="multiAward-headingText">Multi-award winning</h2>
          <div class="award-sectionwrapper">
            <img src="https://i.ibb.co/gb2F9t9P/Finance-Asia-Award.png" alt="Finance-Asia-Award" />
            <img src="https://i.ibb.co/zWzBX7tv/euromoney-Award.png" alt="euromoney-Award" />
            <img src="https://i.ibb.co/gb2F9t9P/Finance-Asia-Award.png" alt="Finance-Asia-Award" />
            <img src="https://i.ibb.co/zWzBX7tv/euromoney-Award.png" alt="euromoney-Award" />
            <img src="https://i.ibb.co/gb2F9t9P/Finance-Asia-Award.png" alt="Finance-Asia-Award" />
            <img src="https://i.ibb.co/zWzBX7tv/euromoney-Award.png" alt="euromoney-Award" />
          </div>
        </section>
        <section class="insight-sectionWrapper">
          <h2 class="insight-mainTitle">Learn more with HSBC insights</h2>
          <p class="insight-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div class="insight-slider swiper-container">
            <div class="insight-container swiper-wrapper">
              <div class="image-section swiper-slide">
                <div class="insight-card-img">
                  <img src="https://i.ibb.co/x9VhpFj/Image-1.png" alt="insight-card" />
                </div>
                <div class="insight-card-content">
                  <div class="gray-section">
                    <span class="promo-card__date">June 2024</span>
                    <span class="time-section">05 min read</span>
                  </div>
                  <div class="insight-heading">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>Discover new sentiment and focus for ASEAN businesses from our survey of
                      600
                      finance
                      decision makers in the region.</p>
                  </div>
                  <a class="insightCardCta">
                    <svg font-size="m"
                      class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                      focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                      role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                      opacity="1" fill="#DB0011">
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                      <path fill="none" d="M0 16V0h11v16z"></path>
                    </svg>
                    <span href="https://www.business.hsbc.com/en-gb/business-guides">Learn
                      more</span>
                  </a>
                </div>
              </div>
              <div class="image-section swiper-slide">
                <div class="insight-card-img">
                  <img src="https://i.ibb.co/gZkc5w7G/Image-Frame.png" alt="insight-card" />
                </div>
                <div class="insight-card-content">
                  <div class="gray-section">
                    <span class="promo-card__date">June 2024</span>
                    <span class="time-section">05 min read</span>
                  </div>
                  <div class="insight-heading">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>Discover new sentiment and focus for ASEAN businesses from our survey of
                      600
                      finance
                      decision makers in the region.</p>
                  </div>
                  <a class="insightCardCta">
                    <svg font-size="m"
                      class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                      focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                      role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                      opacity="1" fill="#DB0011">
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                      <path fill="none" d="M0 16V0h11v16z"></path>
                    </svg>
                    <span href="https://www.business.hsbc.com/en-gb/business-guides">Learn
                      more</span>
                  </a>
                </div>
              </div>
              <div class="image-section swiper-slide">
                <div class="insight-card-img">
                  <img src="https://i.ibb.co/23PyKGtY/Image-Frame-1.png" alt="insight-card" />
                </div>
                <div class="insight-card-content">
                  <div class="gray-section">
                    <span class="promo-card__date">June 2024</span>
                    <span class="time-section">05 min read</span>
                  </div>
                  <div class="insight-heading">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                    <p>Discover new sentiment and focus for ASEAN businesses from our survey of
                      600
                      finance
                      decision makers in the region.</p>
                  </div>
                  <a class="insightCardCta">
                    <svg font-size="m"
                      class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                      focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true"
                      role="presentation" data-testid="ChevronRightThickIcon" data-id="Icon"
                      opacity="1" fill="#DB0011">
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                      <path fill="none" d="M0 16V0h11v16z"></path>
                    </svg>
                    <span href="https://www.business.hsbc.com/en-gb/business-guides">Learn
                      more</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-pagination pagination"></div>
            <div class="swiper-button-next next-btn"></div>
            <div class="swiper-button-prev prev-btn"></div>
          </div>
        </section>
        <section class="faq-container">
          <h2 class="faq-title">Frequently asked questions</h2>
          <div class="faq-itm faq-open">
            <button class="faq-qst">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </span>
              <svg font-size="m" class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation"
                data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011">
                <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                <path fill="none" d="M0 16V0h11v16z"></path>
              </svg>
            </button>
            <div class="faq-answer-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco
                laboris nisi ut aliquip</p>
              <div class="faq-feedback-section">
                <p>Was this helpful? </p>
                <span>Yes<img src="https://i.ibb.co/fGFYkJWk/Thumbs-up.png" alt="Thumbs-up" /></span>
                <span>No<img src="https://i.ibb.co/Rt6crf3/Thumbs-down.png" alt="Thumbs-down" /></span>
              </div>
            </div>
          </div>
          <div class="faq-itm">
            <button class="faq-qst">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </span>
              <svg font-size="m" class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation"
                data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011">
                <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                <path fill="none" d="M0 16V0h11v16z"></path>
              </svg>
            </button>
            <div class="faq-answer-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco
                laboris nisi ut aliquip</p>
              <div class="faq-feedback-section">
                <p>Was this helpful? </p>
                <span>Yes<img src="https://i.ibb.co/fGFYkJWk/Thumbs-up.png" alt="Thumbs-up" /></span>
                <span>No<img src="https://i.ibb.co/Rt6crf3/Thumbs-down.png" alt="Thumbs-down" /></span>
              </div>
            </div>
          </div>
          <div class="faq-itm">
            <button class="faq-qst">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </span>
              <svg font-size="m" class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation"
                data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011">
                <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                <path fill="none" d="M0 16V0h11v16z"></path>
              </svg>
            </button>
            <div class="faq-answer-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco
                laboris nisi ut aliquip</p>
              <div class="faq-feedback-section">
                <p>Was this helpful? </p>
                <span>Yes<img src="https://i.ibb.co/fGFYkJWk/Thumbs-up.png" alt="Thumbs-up" /></span>
                <span>No<img src="https://i.ibb.co/Rt6crf3/Thumbs-down.png" alt="Thumbs-down" /></span>
              </div>
            </div>
          </div>
          <div class="faq-itm">
            <button class="faq-qst">
              <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              </span>
              <svg font-size="m" class="Box-sc-y5ctq9-0 SvgIcon__SvgIconBox-sc-1vnlbss-0 hYCmMy SvgIcon"
                focusable="false" viewBox="0 0 18 18" color="#333" aria-hidden="true" role="presentation"
                data-testid="ChevronRightThickIcon" data-id="Icon" opacity="1" fill="#DB0011">
                <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z"></path>
                <path fill="none" d="M0 16V0h11v16z"></path>
              </svg>
            </button>
            <div class="faq-answer-box">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco
                laboris nisi ut aliquip</p>
              <div class="faq-feedback-section">
                <p>Was this helpful? </p>
                <span>Yes<img src="https://i.ibb.co/fGFYkJWk/Thumbs-up.png" alt="Thumbs-up" /></span>
                <span>No<img src="https://i.ibb.co/Rt6crf3/Thumbs-down.png" alt="Thumbs-down" /></span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

  );
};
export default HSBCCurrencyConverter;