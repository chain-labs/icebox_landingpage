import React from "react";
import { Button } from "../../components/Button";
import { Element } from "../../components/Element";
import { ElementWrapper } from "../../components/ElementWrapper";
import { Loader } from "../../components/Loader";
import { ChevronLeft8 } from "../../icons/ChevronLeft8";
import { ChevronRight12 } from "../../icons/ChevronRight12";
import "./style.css";

export const Wip = () => {
  return (
    <div className="wip">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <div className="frame-3">
              <div className="frame-wrapper">
                <div className="frame-4">
                  <h1 className="text-wrapper">The premier platform for P2P ordinals lending</h1>
                </div>
              </div>
              <p className="p">Instantly lend and borrow bitcoin against high-value ordinals</p>
            </div>
          </div>
          <div className="frame-5">
            <div className="frame-6">
              <div className="group">
                <div className="column">
                  <div className="hyperlink-wrapper">
                    <div className="hyperlink">
                      <div className="frame-7">
                        <img className="rectangle" alt="Rectangle" src="/img/rectangle-1886.png" />
                        <div className="frame-8">
                          <div className="text-wrapper-2">Lending against</div>
                          <div className="text-wrapper-3">Degods #2048</div>
                        </div>
                      </div>
                      <Loader className="loader-instance" loader="/img/loader.svg" />
                    </div>
                  </div>
                  <img className="vector" alt="Vector" src="/img/vector-110.png" />
                </div>
              </div>
              <div className="frame-9">
                <div className="text-wrapper-4">Grow your BTC stack</div>
                <p className="text-wrapper-5">Lenders can earn yield by offering collateralized loans.</p>
              </div>
            </div>
            <div className="frame-10">
              <div className="frame-11">
                <div className="frame-12">
                  <p className="text-wrapper-6">Transactions secured on Bitcoin L1 network</p>
                  <p className="text-wrapper-7">
                    Escrow funcitonality mangaged by combination of smart contracts and multisig wallets
                  </p>
                </div>
                <div className="overlap-group">
                  <div className="div-wrapper">
                    <div className="frame-13">
                      <img className="img" alt="Frame" src="/img/frame.svg" />
                      <div className="text-wrapper-8">Icebox</div>
                    </div>
                  </div>
                  <img className="line" alt="Line" src="/img/line-1.svg" />
                  <div className="frame-14">
                    <div className="text-wrapper-9">DeGods #2407</div>
                  </div>
                </div>
                <div className="frame-15">
                  <div className="frame-13">
                    <img className="img-2" alt="Bitcoin svg" src="/img/bitcoin-svg.svg" />
                    <div className="text-wrapper-8">Bitcoin</div>
                  </div>
                </div>
              </div>
              <div className="frame-11">
                <div className="frame-16">
                  <div className="text-wrapper-10">Instant liquidity</div>
                  <p className="text-wrapper-11">Sub-copy: Get up to 2 BTC with just three clicks</p>
                </div>
                <img className="frame-17" alt="Frame" src="/img/frame-1321315251.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-18">
          <div className="div-2">
            <div className="left">
              <img className="frame-19" alt="Frame" src="/img/frame-9.svg" />
            </div>
            <Button
              className="button-instance"
              iconButton="off"
              label="Connect wallet"
              labelClassName="design-component-instance-node"
              leftIcon={false}
              rightIcon={false}
              size="large"
              stateProp="normal"
              type="secondary"
            />
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <div className="rectangle-2" />
            <div className="frame-20">
              <p className="text-wrapper-12">Icebox is part of the Thaw Digital family</p>
              <p className="text-wrapper-13">Innovation + experience from a leader in crypto debt financing.</p>
            </div>
            <div className="slice" />
            <img className="slice-2" alt="Slice" src="/img/slice-1-2.png" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="cursor" alt="Cursor" src="/img/cursor.png" />
                <div className="comment">
                  <div className="text-wrapper-14">Find us on</div>
                  <img className="img-2" alt="Twitter logo" src="/img/twitterlogo.svg" />
                  <img className="img-2" alt="Globe" src="/img/globe.svg" />
                </div>
              </div>
            </div>
            <Element className="twenty-four" element="/img/024.svg" />
            <ElementWrapper className="thirty-seven" element="/img/037.svg" />
          </div>
        </div>
        <div className="wrap">
          <div className="wrap-2">
            <div className="text-wrapper-15">Cookies</div>
            <div className="text-wrapper-15">Privacy Policy</div>
            <div className="text-wrapper-15">Term of Conditions</div>
          </div>
          <img className="divider" alt="Divider" src="/img/divider.svg" />
          <p className="text-wrapper-16">©2023 Coolwater. All Rights Reserved.</p>
        </div>
        <div className="frame-21">
          <div className="div-2">
            <div className="text-wrapper-17">Top Collections</div>
            <div className="button-2">
              <ChevronLeft8 className="icon-instance-node" color="#A4ACB9" />
              <div className="label-2" />
              <ChevronRight12 className="icon-instance-node" color="#666D80" />
            </div>
          </div>
          <div className="frame-22">
            <div className="frame-23">
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-34624160-2.png" />
              <div className="frame-24">
                <div className="frame-25">
                  <div className="label-initials">
                    <div className="text-wrapper-18">Ordinal Maxi Biz (OMB)</div>
                  </div>
                  <div className="frame-26">
                    <div className="current-bid">
                      <div className="text-wrapper-19">Floor Price</div>
                      <div className="text-wrapper-20">1.47 BTC</div>
                    </div>
                    <div className="ending-in">
                      <div className="text-wrapper-19">Max Loan</div>
                      <div className="text-wrapper-21">2.012 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-23">
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-34624160-1.png" />
              <div className="frame-24">
                <div className="frame-25">
                  <div className="label-initials-2">
                    <div className="text-wrapper-18">Bitcoin Frogs</div>
                  </div>
                  <div className="frame-26">
                    <div className="current-bid">
                      <div className="text-wrapper-19">Floor Price</div>
                      <div className="text-wrapper-20">1.47 BTC</div>
                    </div>
                    <div className="ending-in">
                      <div className="text-wrapper-19">Max Loan</div>
                      <div className="text-wrapper-21">2.012 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-23">
              <img className="rectangle-3" alt="Rectangle" src="/img/rectangle-34624160.png" />
              <div className="frame-24">
                <div className="frame-25">
                  <div className="label-initials-3">
                    <div className="text-wrapper-18">BTC DeGods</div>
                  </div>
                  <div className="frame-26">
                    <div className="current-bid">
                      <div className="text-wrapper-19">Floor Price</div>
                      <div className="text-wrapper-20">0.010346 BTC</div>
                    </div>
                    <div className="ending-in">
                      <div className="text-wrapper-19">Max Loan</div>
                      <div className="text-wrapper-21">2.012 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-27">
              <div className="overlap-2">
                <p className="text-wrapper-22">See all collections and borrow against them.</p>
                <div className="SEE-ALL-COLLECTIONS">
                  <div className="overlap-group-3">
                    <img className="vector-2" alt="Vector" src="/img/vector-620-2.png" />
                    <div className="text-wrapper-23">S</div>
                    <div className="text-wrapper-24">N</div>
                    <div className="text-wrapper-25">O</div>
                    <div className="text-wrapper-26">I</div>
                    <div className="text-wrapper-27">T</div>
                    <div className="text-wrapper-28">C</div>
                    <div className="text-wrapper-29">E</div>
                    <div className="text-wrapper-30">L</div>
                    <div className="text-wrapper-31">L</div>
                    <div className="text-wrapper-32">O</div>
                    <div className="text-wrapper-33">C</div>
                    <div className="div-3" />
                    <div className="text-wrapper-34">L</div>
                    <div className="text-wrapper-35">L</div>
                    <div className="text-wrapper-36">A</div>
                    <div className="div-4" />
                    <div className="text-wrapper-37">E</div>
                    <div className="text-wrapper-38">E</div>
                    <div className="text-wrapper-39">S</div>
                  </div>
                </div>
                <div className="SEE-ALL-COLLECTIONS-2">
                  <div className="overlap-3">
                    <img className="vector-3" alt="Vector" src="/img/vector-620-1.svg" />
                    <div className="text-wrapper-40">S</div>
                    <div className="text-wrapper-41">N</div>
                    <div className="text-wrapper-42">O</div>
                    <div className="text-wrapper-43">I</div>
                    <div className="text-wrapper-44">T</div>
                    <div className="text-wrapper-45">C</div>
                    <div className="text-wrapper-46">E</div>
                    <div className="text-wrapper-47">L</div>
                    <div className="text-wrapper-48">L</div>
                    <div className="text-wrapper-49">O</div>
                    <div className="text-wrapper-50">C</div>
                    <div className="div-5" />
                    <div className="text-wrapper-51">L</div>
                    <div className="text-wrapper-52">L</div>
                    <div className="text-wrapper-53">A</div>
                    <div className="div-6" />
                    <div className="text-wrapper-54">E</div>
                    <div className="text-wrapper-55">E</div>
                    <div className="text-wrapper-56">S</div>
                  </div>
                </div>
                <div className="group-2">
                  <div className="overlap-4">
                    <div className="SEE-ALL-COLLECTIONS-3">
                      <div className="overlap-group-4">
                        <img className="vector-4" alt="Vector" src="/img/vector-620.svg" />
                        <div className="text-wrapper-57">S</div>
                        <div className="text-wrapper-58">N</div>
                        <div className="text-wrapper-59">O</div>
                        <div className="text-wrapper-60">I</div>
                        <div className="text-wrapper-61">T</div>
                        <div className="text-wrapper-62">C</div>
                        <div className="text-wrapper-63">E</div>
                        <div className="text-wrapper-64">L</div>
                        <div className="text-wrapper-65">L</div>
                        <div className="text-wrapper-66">O</div>
                        <div className="text-wrapper-67">C</div>
                        <div className="div-7" />
                        <div className="text-wrapper-68">L</div>
                        <div className="text-wrapper-69">L</div>
                        <div className="text-wrapper-70">A</div>
                        <div className="div-8" />
                        <div className="text-wrapper-71">E</div>
                        <div className="text-wrapper-72">E</div>
                        <div className="text-wrapper-73">S</div>
                      </div>
                    </div>
                    <div className="SEE-ALL-COLLECTIONS-4">
                      <div className="overlap-5">
                        <div className="overlap-6">
                          <div className="overlap-7">
                            <div className="text-wrapper-74">S</div>
                            <div className="text-wrapper-75">N</div>
                            <div className="text-wrapper-76">O</div>
                            <div className="text-wrapper-77">I</div>
                          </div>
                          <div className="text-wrapper-78">T</div>
                        </div>
                        <div className="text-wrapper-79">C</div>
                      </div>
                      <div className="text-wrapper-80">E</div>
                      <div className="text-wrapper-81">L</div>
                      <div className="text-wrapper-82">L</div>
                      <div className="overlap-8">
                        <div className="text-wrapper-83">O</div>
                        <div className="overlap-9">
                          <div className="text-wrapper-84">C</div>
                          <div className="div-9" />
                          <div className="overlap-10">
                            <div className="text-wrapper-85">L</div>
                            <div className="text-wrapper-86">L</div>
                            <div className="text-wrapper-87">A</div>
                            <div className="div-10" />
                            <div className="text-wrapper-88">E</div>
                            <div className="text-wrapper-89">E</div>
                            <div className="text-wrapper-90">S</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="button-3" iconButton="on" size="large" stateProp="normal" type="secondary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
