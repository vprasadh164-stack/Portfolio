import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calculator, Sliders, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface PlaygroundModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlaygroundModal: React.FC<PlaygroundModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'metro' | 'd2c' | 'pricing'>('metro');

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Model 1: Metro Transit Sizing State
  const [corridorPop, setCorridorPop] = useState<number>(3.6); // in Millions
  const [modalShift, setModalShift] = useState<number>(12); // %
  const [peakShare, setPeakShare] = useState<number>(16); // %
  const [farePerTrip, setFarePerTrip] = useState<number>(45); // ₹

  // Calculations for Metro
  const dailyMotorizedTrips = corridorPop * 1000000 * 0.38; // 38% trip generation
  const dailyMetroTrips = Math.round(dailyMotorizedTrips * (modalShift / 100));
  const peakHourPassengers = Math.round(dailyMetroTrips * (peakShare / 100));
  const peakDirLoad = Math.round(peakHourPassengers * 0.65); // 65% directional asymmetry
  const trainCapacity = 1100; // 6-car trainset standard
  const trainsPerHour = Math.ceil(peakDirLoad / trainCapacity);
  const headwayMinutes = (60 / trainsPerHour).toFixed(1);
  const fleetRequired = Math.ceil(trainsPerHour * 1.6); // cycle time buffer
  const annualFareRevenueCr = ((dailyMetroTrips * farePerTrip * 350) / 10000000).toFixed(1);

  // Model 2: D2C Unit Economics State
  const [retailPrice, setRetailPrice] = useState<number>(1299);
  const [cogs, setCogs] = useState<number>(320);
  const [shippingCost, setShippingCost] = useState<number>(95);
  const [channelFeePct, setChannelFeePct] = useState<number>(18);
  const [rtoRatePct, setRtoRatePct] = useState<number>(12);

  // Calculations for D2C
  const channelFeeAmount = Math.round(retailPrice * (channelFeePct / 100));
  const rtoPenaltyCost = Math.round(shippingCost * 1.8 * (rtoRatePct / 100)); // reverse logistics
  const netContributionBeforeAds = retailPrice - cogs - shippingCost - channelFeeAmount - rtoPenaltyCost;
  const grossMarginPct = (((retailPrice - cogs) / retailPrice) * 100).toFixed(1);
  const netContributionMarginPct = ((netContributionBeforeAds / retailPrice) * 100).toFixed(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#090908]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl h-[90vh] bg-[#141413] border border-[#282826] text-[#E8E8E5] flex flex-col overflow-hidden z-10"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-[#222220] bg-[#141413] shrink-0">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#E8E8E5]" />
              <h3 className="text-sm font-bold font-mono-code uppercase tracking-widest text-[#E8E8E5]">
                STRATEGY PLAYGROUND &bull; QUANTITATIVE MODELS
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 border border-[#2a2a28] hover:border-[#E8E8E5] hover:bg-[#1e1e1c] text-[#A3A39E] hover:text-[#E8E8E5] transition-colors flex items-center gap-1 text-xs font-mono-code"
            >
              <X className="w-4 h-4" />
              <span className="hidden sm:inline">ESC</span>
            </button>
          </div>

          {/* Model Selector Tabs */}
          <div className="flex border-b border-[#222220] bg-[#161614] overflow-x-auto shrink-0">
            <button
              onClick={() => setActiveTab('metro')}
              className={`px-6 py-3.5 text-xs font-mono-code uppercase tracking-wider border-r border-[#222220] transition-colors shrink-0 ${
                activeTab === 'metro'
                  ? 'bg-[#141413] text-[#E8E8E5] font-bold border-b-2 border-b-[#E8E8E5]'
                  : 'text-[#8E8E88] hover:text-[#C8C8C4]'
              }`}
            >
              01 &bull; METRO MARKET SIZING
            </button>
            <button
              onClick={() => setActiveTab('d2c')}
              className={`px-6 py-3.5 text-xs font-mono-code uppercase tracking-wider border-r border-[#222220] transition-colors shrink-0 ${
                activeTab === 'd2c'
                  ? 'bg-[#141413] text-[#E8E8E5] font-bold border-b-2 border-b-[#E8E8E5]'
                  : 'text-[#8E8E88] hover:text-[#C8C8C4]'
              }`}
            >
              02 &bull; D2C UNIT ECONOMICS
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">
            {activeTab === 'metro' && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-[#E8E8E5]">
                    Arterial Metro Corridor Demand &amp; Fleet Sizing Model
                  </h4>
                  <p className="text-xs font-mono-code text-[#8E8E88] mt-1">
                    Based on Venkatesh&apos;s Strategy Case 05 &bull; First-principles passenger flow and train set frequency derivation.
                  </p>
                </div>

                {/* Interactive Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-[#222220] bg-[#171715]">
                  {/* Slider 1: Corridor Catchment */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">Catchment Population</span>
                      <span className="font-bold text-[#E8E8E5]">{corridorPop.toFixed(1)} Million</span>
                    </div>
                    <input
                      type="range"
                      min="1.5"
                      max="7.0"
                      step="0.1"
                      value={corridorPop}
                      onChange={(e) => setCorridorPop(parseFloat(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                    <span className="text-[11px] text-[#73736F] block">
                      Residential and commercial catchment within 2.5 km of stations
                    </span>
                  </div>

                  {/* Slider 2: Modal Shift */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">Modal Shift to Metro</span>
                      <span className="font-bold text-[#E8E8E5]">{modalShift}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="30"
                      step="1"
                      value={modalShift}
                      onChange={(e) => setModalShift(parseInt(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                    <span className="text-[11px] text-[#73736F] block">
                      Transfer propensity from buses, two-wheelers, and cabs
                    </span>
                  </div>

                  {/* Slider 3: Peak Hour Share */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">Peak Hour Concentration</span>
                      <span className="font-bold text-[#E8E8E5]">{peakShare}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="25"
                      step="1"
                      value={peakShare}
                      onChange={(e) => setPeakShare(parseInt(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                    <span className="text-[11px] text-[#73736F] block">
                      Trips concentrated in 8:00–9:30 AM morning rush
                    </span>
                  </div>

                  {/* Slider 4: Fare */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">Average Blended Fare</span>
                      <span className="font-bold text-[#E8E8E5]">₹{farePerTrip}</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="80"
                      step="5"
                      value={farePerTrip}
                      onChange={(e) => setFarePerTrip(parseInt(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                    <span className="text-[11px] text-[#73736F] block">
                      Distance-calibrated automated ticketing ticket average
                    </span>
                  </div>
                </div>

                {/* Outputs Panel */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      {dailyMetroTrips.toLocaleString()}
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      Daily Passengers
                    </span>
                  </div>

                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      {fleetRequired}
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      6-Car Trains Needed
                    </span>
                  </div>

                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      {headwayMinutes}m
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      Peak Headway
                    </span>
                  </div>

                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      ₹{annualFareRevenueCr} Cr
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      Annual Fare Revenue
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'd2c' && (
              <div className="space-y-8">
                <div>
                  <h4 className="text-xl font-bold tracking-tight text-[#E8E8E5]">
                    D2C Product Contribution &amp; RTO Sensitivity
                  </h4>
                  <p className="text-xs font-mono-code text-[#8E8E88] mt-1">
                    Based on Venkatesh&apos;s OORU, Fetchy.go &amp; Solid Perfume economics models.
                  </p>
                </div>

                {/* Sliders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 border border-[#222220] bg-[#171715]">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">Retail Price (₹)</span>
                      <span className="font-bold text-[#E8E8E5]">₹{retailPrice}</span>
                    </div>
                    <input
                      type="range"
                      min="299"
                      max="2499"
                      step="50"
                      value={retailPrice}
                      onChange={(e) => setRetailPrice(parseInt(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">Manufacturing COGS (₹)</span>
                      <span className="font-bold text-[#E8E8E5]">₹{cogs}</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="800"
                      step="10"
                      value={cogs}
                      onChange={(e) => setCogs(parseInt(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">RTO Rate (%)</span>
                      <span className="font-bold text-[#E8E8E5]">{rtoRatePct}%</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="35"
                      step="1"
                      value={rtoRatePct}
                      onChange={(e) => setRtoRatePct(parseInt(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                    <span className="text-[11px] text-[#73736F] block">
                      Return to origin on Cash on Delivery orders
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono-code">
                      <span className="text-[#A3A39E]">Marketplace/Quick-Com Commission</span>
                      <span className="font-bold text-[#E8E8E5]">{channelFeePct}%</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="35"
                      step="1"
                      value={channelFeePct}
                      onChange={(e) => setChannelFeePct(parseInt(e.target.value))}
                      className="w-full accent-[#E8E8E5] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Outputs */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      {grossMarginPct}%
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      Gross Margin
                    </span>
                  </div>

                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      ₹{netContributionBeforeAds}
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      Contribution / Unit
                    </span>
                  </div>

                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      {netContributionMarginPct}%
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      Net Contrib Margin
                    </span>
                  </div>

                  <div className="p-5 border border-[#222220] bg-[#161614]">
                    <span className="text-2xl sm:text-3xl font-black font-mono-code text-[#E8E8E5] block">
                      ₹{Math.round(netContributionBeforeAds * 0.55)}
                    </span>
                    <span className="text-[11px] font-mono-code uppercase text-[#8E8E88] mt-1 block">
                      Target CAC Ceiling
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
