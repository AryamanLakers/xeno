import Navbar from "./Navbar.js";
import React from "react";
import "./faq.scss"
import Footer from "./Footer.js"
export default function Feature() {
  return (
    <div className="feature_page11">
      <div id="hello"><Navbar /></div>
      <div className="faq_page_feature11">
	          <div className="faq_page_heading">Frequently Asked Questions</div>
	          <div className="faq_page_content">Answers to commonly asked questions</div>
       </div>
       <div className="faq_list11">
       		<nav>
       		  <label for="touch1"><p>How does XENO generate up to 15% p.a. returns on stable coins?</p></label>               
					  <input type="checkbox" id="touch1" /> 
					  <ul class="slide">
					    <li>After you invest your USDT in INR, XENO collaborates with institutional
borrowers (such as crypto exchanges, hedge funds, and so on), third-party
lending partners, and DeFi platforms to generate profits. XENO diversifies
your USDT investment across these  multiple  partners  to acquire  the
highest available rates and provides returns on your USDT that increase
every second in your wallet. Collaterals supplement the funds provided by
our lending partners, assuring money recovery in the case of a default.</li> 
					  </ul>
					</nav> 
					<nav>
		       		  <label for="touch2"><p>What are the risks involved?</p></label>               
					  <input type="checkbox" id="touch2" /> 
					  <ul class="slide">
					    <li>There are four major factors to consider:
There are four important considerations:
1. Regulatory danger: If the government imposes a ban, XENO
will safely repay all of your money without interest.
2. Credit risk indicates that we will incur a principal loss if our
loan partner fails or goes bankrupt. To solve this, XENO works
with a number of financial partners and dedicates a portion of
the funds to DeFi technology.
3. Smart contract risks include While just a small portion of your
assets are using DeFi protocols, they are subject to assaults
that result in money losses. To address this, XENO only works
with DeFi protocols that have been thoroughly reviewed and
attacked.
4. USDT de-pegging risk: In a rare case, USDT may lose its peg
and its price may not remain steady at $1.</li> 
					  </ul>
					</nav> 
					<nav>
		       		  <label for="touch3"><p>Why only 15% and not more?</p></label>               
					  <input type="checkbox" id="touch3" /> 
					  <ul class="slide">
					    <li>Whether in crypto or traditional finance, capital investments frequently
follow a thumb rule of high-risk large returns, low-risk low returns, and
medium-risk medium returns. While none of the risks listed above are
zero, we strive to mitigate them to the greatest extent feasible at the
penalty of lower returns. We are always divided between the need to
increase revenues and the desire to minimize risk to our comfort level, but
we have opted to limit risk as much as feasible. XENO, on the other hand,
is still laden with danger. As time passes, expect new products throughout
the risk spectrum, with higher risk – higher return alternatives to the
present one, and vice versa.</li> 
					  </ul>
					</nav> 
					<nav>
		       		  <label for="touch4"><p>What is XENO?</p></label>               
					  <input type="checkbox" id="touch4" /> 
					  <ul class="slide">
					    <li>XENO is a cryptocurrency investing platform that goes beyond simply
buying   and   selling   coins   to   provide   its   users   a   selection   of   passive
investment assets built on top of cryptocurrency. XENO's initial offering
provides crypto users with simple diversification, with earnings of up to
15% per year on stable coins.</li> 
					  </ul>
					</nav> 
       </div>
       <div className="outermost"><Footer /></div>
    </div>
   )
}