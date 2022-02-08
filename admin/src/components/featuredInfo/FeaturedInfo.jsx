import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featuredInfo.css';

export default function FeaturedInfo() {
  return <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹10,000</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className='featuredIconNegative'/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹16,000</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownward className='featuredIconNegative'/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">₹6,000</span>
                    <span className="featuredMoneyRate">
                        +1.2 <ArrowUpward className='featuredIcon'/>
                        </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>
  </div>;
}
