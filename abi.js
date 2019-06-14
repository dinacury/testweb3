/* This is for example purposes */
const contractABI = pragma solidity 0.5.8;

contract TimeCharterParty {
    
    string public Owners;
    string public Charterers;
    uint256 public Hire;
    uint public FineFactor;
    uint public DaysUnpaid;
    uint public period;
    uint public FineFactorLimit;
    
     struct Vessel {
        string VesselName;
        string Flag;
        uint YearBuilt;
        uint DeadWeight;
        uint GrainCapacity;
        uint SpeedCapability;
    }
    Vessel[] public Vessels;
    string public PlaceofCharter;
    string public DeliveryPort;
    uint public EarliestDeliveryTime;
    uint public CancellationTime;
    uint public FuelQuantityOnDelivery;
    uint public FuelQuantityOnRedelivery;
    uint public FuelPriceOnDelivery;
    uint public FuelPriceOnRedelivery;
    string public OwnersBankAccount;
    uint public MaxPeriodForRequisition;
    uint public LumpsumForHoldCleaningOnRedelivery;
    string public LawAndArbitration;
    string public Comissioner;
    uint public ComissionRate;
    
    constructor(
        string memory _Owners,
        string memory _Charterers,
        uint HirePerDay,
        uint FineFactorPerDay,
        uint Days ) public {
            
        Owners = _Owners;
        Charterers = _Charterers;
        Hire = HirePerDay;
        FineFactor = HirePerDay*2;
        period = Days;
        FineFactorLimit = HirePerDay*45;
        
        if (FineFactor > FineFactorLimit) {
            require(FineFactorLimit >= FineFactorPerDay*DaysUnpaid);
        }
    
    }
    
    function calculodaMulta() public view returns (uint256) {
        return FineFactor*DaysUnpaid;
    }
    
   
    
}
if (network === "4") {
    contractAddress = "0x9ae8dcceb5677bbdcf588c6b9f4f1ba0b9d67938"; 
} else {
    contractAddress = "0x9ae8dcceb5677bbdcf588c6b9f4f1ba0b9d67938"; 
}

contract = web3.eth.contract(contractABI).at(contractAddress);
