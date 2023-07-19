import React from "react";
import { ArrowUpRight } from "../../components/ArrowUpRight";
import { Button } from "../../components/Button";
import { ChevronLeft } from "../../components/ChevronLeft";
import { ChevronRight } from "../../components/ChevronRight";
import { Element } from "../../components/Element";
import { ElementWrapper } from "../../components/ElementWrapper";
import { Loader } from "../../components/Loader";
import "./style.css";

export const Iphone = () => {
  return (
    <div className="iphone">
      <div className="div">
        <div className="frame">
          <div className="frame-2">
            <div className="left">
              <img className="img" alt="Frame" src="/img/frame-9.svg" />
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
        <div className="frame-3">
          <div className="frame-wrapper">
            <div className="frame-4">
              <h1 className="text-wrapper">Peer-Peer lending protocol for ordinals</h1>
            </div>
          </div>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur integer consequat ex id tortor molestie or smth else
          </p>
        </div>
        <div className="frame-5">
          <div className="overlap-wrapper">
            <div className="overlap">
              <div className="frame-6">
                <p className="text-wrapper-2">Transactions secured on Bitcoin L1 network</p>
                <p className="text-wrapper-3">
                  Escrow funcitonality mangaged by combination of smart contracts and multisig wallets
                </p>
              </div>
              <div className="group">
                <div className="div-wrapper">
                  <div className="frame-7">
                    <img className="bitcoin-svg" alt="Bitcoin svg" src="/img/bitcoin-svg.svg" />
                    <div className="text-wrapper-4">Bitcoin</div>
                  </div>
                </div>
                <div className="overlap-group">
                  <img className="line" alt="Line" src="/img/line-1.svg" />
                  <div className="frame-8">
                    <div className="text-wrapper-5">DeGods #2407</div>
                  </div>
                  <div className="frame-9">
                    <div className="frame-7">
                      <img className="frame-10" alt="Frame" src="/img/frame.svg" />
                      <div className="text-wrapper-4">Icebox</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="frame-11">
            <div className="frame-12">
              <div className="text-wrapper-6">Instant liquidity</div>
              <p className="text-wrapper-7">Sub-copy: Get up to 2 BTC with just three clicks</p>
            </div>
            <div className="frame-13">
              <img className="ellipse" alt="Ellipse" src="/img/ellipse-6.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-5.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-2.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-3.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-4.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-7.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-8.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-9.png" />
              <img className="ellipse-2" alt="Ellipse" src="/img/ellipse-10.png" />
              <img className="ellipse-3" alt="Ellipse" src="/img/ellipse-11.png" />
            </div>
          </div>
          <div className="frame-14">
            <div className="group-2">
              <div className="column">
                <div className="hyperlink-wrapper">
                  <div className="hyperlink">
                    <div className="frame-15">
                      <img className="rectangle" alt="Rectangle" src="/img/rectangle-1886.png" />
                      <div className="frame-16">
                        <div className="text-wrapper-8">Lending against</div>
                        <div className="text-wrapper-9">Degods #2048</div>
                      </div>
                    </div>
                    <Loader className="loader-instance" loader="/img/loader.svg" />
                  </div>
                </div>
                <img className="vector" alt="Vector" src="/img/chevron-right.png" />
              </div>
            </div>
            <div className="frame-17">
              <div className="text-wrapper-6">Grow your BTC stack</div>
              <p className="text-wrapper-3">Lend against ordinal collections or insciptions and earn BTC yield</p>
            </div>
          </div>
        </div>
        <div className="frame-18">
          <div className="title">
            <div className="text-wrapper-10">Top Collections</div>
            <div className="button-2">
              <ChevronLeft />
              <div className="label-2" />
              <ChevronRight />
            </div>
          </div>
          <div className="frame-19">
            <div className="frame-20">
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-34624160-2.png" />
              <div className="frame-21">
                <div className="frame-22">
                  <div className="label-initials">
                    <div className="text-wrapper-11">Ordinal Maxi Biz (OMB)</div>
                  </div>
                  <div className="frame-23">
                    <div className="current-bid">
                      <div className="text-wrapper-12">Floor Price</div>
                      <div className="text-wrapper-13">1.47 BTC</div>
                    </div>
                    <div className="ending-in">
                      <div className="text-wrapper-14">Max Loan</div>
                      <div className="text-wrapper-15">2.012 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-20">
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-34624160-1.png" />
              <div className="frame-21">
                <div className="frame-22">
                  <div className="label-initials-2">
                    <div className="text-wrapper-11">Bitcoin Frogs</div>
                  </div>
                  <div className="frame-23">
                    <div className="current-bid">
                      <div className="text-wrapper-14">Floor Price</div>
                      <div className="text-wrapper-13">1.47 BTC</div>
                    </div>
                    <div className="ending-in">
                      <div className="text-wrapper-14">Max Loan</div>
                      <div className="text-wrapper-13">2.012 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="frame-20">
              <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-34624160.png" />
              <div className="frame-21">
                <div className="frame-22">
                  <div className="label-initials-3">
                    <div className="text-wrapper-11">BTC DeGods</div>
                  </div>
                  <div className="frame-23">
                    <div className="current-bid">
                      <div className="text-wrapper-14">Floor Price</div>
                      <div className="text-wrapper-13">0.010346 BTC</div>
                    </div>
                    <div className="ending-in">
                      <div className="text-wrapper-14">Max Loan</div>
                      <div className="text-wrapper-13">2.012 BTC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlap-group-wrapper">
              <div className="overlap-2">
                <div className="SEE-ALL-COLLECTIONS">
                  <div className="overlap-group-2">
                    <img className="vector-2" alt="Vector" src="/img/vector-620-2.png" />
                    <div className="text-wrapper-16">S</div>
                    <div className="text-wrapper-17">N</div>
                    <div className="text-wrapper-18">O</div>
                    <div className="text-wrapper-19">I</div>
                    <div className="text-wrapper-20">T</div>
                    <div className="text-wrapper-21">C</div>
                    <div className="text-wrapper-22">E</div>
                    <div className="text-wrapper-23">L</div>
                    <div className="text-wrapper-24">L</div>
                    <div className="text-wrapper-25">O</div>
                    <div className="text-wrapper-26">C</div>
                    <div className="div-2" />
                    <div className="text-wrapper-27">L</div>
                    <div className="text-wrapper-28">L</div>
                    <div className="text-wrapper-29">A</div>
                    <div className="div-3" />
                    <div className="text-wrapper-30">E</div>
                    <div className="text-wrapper-31">E</div>
                    <div className="text-wrapper-32">S</div>
                  </div>
                </div>
                <div className="SEE-ALL-COLLECTIONS-2">
                  <div className="overlap-3">
                    <img className="vector-3" alt="Vector" src="/img/vector-620-1.png" />
                    <div className="text-wrapper-33">S</div>
                    <div className="text-wrapper-34">N</div>
                    <div className="text-wrapper-35">O</div>
                    <div className="text-wrapper-36">I</div>
                    <div className="text-wrapper-37">T</div>
                    <div className="text-wrapper-38">C</div>
                    <div className="text-wrapper-39">E</div>
                    <div className="text-wrapper-40">L</div>
                    <div className="text-wrapper-41">L</div>
                    <div className="text-wrapper-42">O</div>
                    <div className="text-wrapper-43">C</div>
                    <div className="div-4" />
                    <div className="text-wrapper-44">L</div>
                    <div className="text-wrapper-45">L</div>
                    <div className="text-wrapper-46">A</div>
                    <div className="div-5" />
                    <div className="text-wrapper-47">E</div>
                    <div className="text-wrapper-48">E</div>
                    <div className="text-wrapper-49">S</div>
                  </div>
                </div>
                <div className="group-3">
                  <div className="overlap-4">
                    <div className="SEE-ALL-COLLECTIONS-3">
                      <div className="overlap-group-3">
                        <img className="vector-4" alt="Vector" src="/img/vector-620.png" />
                        <div className="text-wrapper-50">S</div>
                        <div className="text-wrapper-51">N</div>
                        <div className="text-wrapper-52">O</div>
                        <div className="text-wrapper-53">I</div>
                        <div className="text-wrapper-54">T</div>
                        <div className="text-wrapper-55">C</div>
                        <div className="text-wrapper-56">E</div>
                        <div className="text-wrapper-57">L</div>
                        <div className="text-wrapper-58">L</div>
                        <div className="text-wrapper-59">O</div>
                        <div className="text-wrapper-60">C</div>
                        <div className="div-6" />
                        <div className="text-wrapper-61">L</div>
                        <div className="text-wrapper-62">L</div>
                        <div className="text-wrapper-63">A</div>
                        <div className="div-7" />
                        <div className="text-wrapper-64">E</div>
                        <div className="text-wrapper-65">E</div>
                        <div className="text-wrapper-66">S</div>
                      </div>
                    </div>
                    <div className="SEE-ALL-COLLECTIONS-4">
                      <div className="overlap-5">
                        <div className="overlap-6">
                          <div className="overlap-7">
                            <div className="text-wrapper-67">S</div>
                            <div className="text-wrapper-68">N</div>
                            <div className="text-wrapper-69">O</div>
                            <div className="text-wrapper-70">I</div>
                          </div>
                          <div className="text-wrapper-71">T</div>
                        </div>
                        <div className="text-wrapper-72">C</div>
                      </div>
                      <div className="text-wrapper-73">E</div>
                      <div className="text-wrapper-74">L</div>
                      <div className="text-wrapper-75">L</div>
                      <div className="overlap-8">
                        <div className="text-wrapper-76">O</div>
                        <div className="overlap-9">
                          <div className="text-wrapper-77">C</div>
                          <div className="overlap-10">
                            <div className="div-8" />
                            <div className="text-wrapper-78">L</div>
                            <div className="text-wrapper-79">L</div>
                            <div className="text-wrapper-80">A</div>
                            <div className="div-9" />
                            <div className="text-wrapper-81">E</div>
                            <div className="text-wrapper-82">E</div>
                            <div className="text-wrapper-83">S</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="arrow-up-right-wrapper"
                  iconButton="on"
                  override={<ArrowUpRight />}
                  size="large"
                  stateProp="normal"
                  type="secondary"
                />
                <p className="text-wrapper-84">See all collections and borrow against them.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-24">
          <div className="overlap-11">
            <div className="rectangle-3" />
            <div className="frame-25">
              <p className="text-wrapper-85">Icebox is part of the Thaw Digital family</p>
              <p className="text-wrapper-86">Innovation + experience from a leader in crypto debt financing.</p>
            </div>
            <div className="slice" />
            <img className="slice-2" alt="Slice" src="/img/slice-1-2.png" />
            <div className="group-4">
              <div className="overlap-group-4">
                <img className="cursor" alt="Cursor" src="/img/cursor.png" />
                <div className="comment">
                  <div className="text-wrapper-87">Find us on</div>
                  <img className="img-2" alt="Twitter logo" src="/img/twitterlogo.svg" />
                  <img className="img-2" alt="Globe" src="/img/globe.svg" />
                </div>
              </div>
            </div>
            <div className="group-5">
              <div className="overlap-12">
                <Element className="twenty-four" element="/img/024.svg" />
                <ElementWrapper className="thirty-seven" element="/img/037-1.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="wrap">
          <div className="wrap-2">
            <div className="text-wrapper-88">Cookies</div>
            <div className="text-wrapper-88">Privacy Policy</div>
            <div className="text-wrapper-88">Term of Conditions</div>
          </div>
          <img className="divider" alt="Divider" src="/img/divider.svg" />
          <p className="text-wrapper-89">©2023 Coolwater. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
