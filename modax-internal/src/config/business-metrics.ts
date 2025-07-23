// Business metrics and data for ModAx
// This file centralizes all business-related metrics and projections

export const businessMetrics = {
  // Market Reality
  marketReality: {
    genAIPocFailureRate: 73, // percentage
    wastedInvestment: 4.8, // billion dollars
    typicalProjectTime: '18-24', // months
    mainProblem: 'Brilliant POCs die. Enterprise reality wins.',
  },

  // ModAx Solution
  solution: {
    primaryValue: 'Production in 90 days',
    secondaryValue: 'AWS pays 80%',
    approach: 'Transform POCs into production-ready systems',
  },

  // Revenue Projections
  revenueProjections: {
    dealSizes: {
      entry: 50000, // $50K
      expansion: 200000, // $200K
      transformation: 1000000, // $1M
    },
    yearlyProjections: [
      {
        year: 'Year 1',
        entries: 20,
        entriesRevenue: 1, // million
        expansions: 10,
        expansionsRevenue: 2, // million
        transformations: 0,
        transformationsRevenue: 0,
        total: 3, // million
      },
      {
        year: 'Year 2',
        entries: 50,
        entriesRevenue: 2.5,
        expansions: 30,
        expansionsRevenue: 6,
        transformations: 5,
        transformationsRevenue: 5,
        total: 13.5,
      },
      {
        year: 'Year 3',
        entries: 100,
        entriesRevenue: 5,
        expansions: 60,
        expansionsRevenue: 12,
        transformations: 20,
        transformationsRevenue: 20,
        total: 37,
      },
    ],
  },

  // TAM Calculations
  marketSize: {
    totalTAM: 10.7, // billion
    segments: {
      'Financial Services': {
        tam: 3.2, // billion
        modernizationSpend: 720, // million
        companies: {
          'Regional banks': 300,
          'Credit unions': 150,
          'Insurance companies': 125,
          'Investment firms': 200,
        },
      },
      'Healthcare': {
        tam: 2.8, // billion
        modernizationSpend: 630, // million
        companies: {
          'Hospital systems': 280,
          'Clinics': 420,
          'Medical practices': 350,
          'Diagnostic labs': 180,
        },
      },
      'Retail': {
        tam: 2.5, // billion
        modernizationSpend: 550, // million
        companies: {
          'Retail chains': 180,
          'E-commerce': 320,
          'Restaurants': 250,
          'Specialty retail': 290,
        },
      },
      'Manufacturing': {
        tam: 2.2, // billion
        modernizationSpend: 500, // million
        companies: {
          'Discrete manufacturing': 220,
          'Process manufacturing': 180,
          'Industrial equipment': 150,
          'Consumer goods': 190,
        },
      },
    },
  },

  // Strategic Insights
  insights: {
    targetMarket: '$100M-$1B revenue companies',
    sweetSpot: 'Failed POCs + Budget allocated + Executive mandate',
    differentiators: [
      '90-day transformation vs 18-month projects',
      'Working systems vs endless consulting',
      'AWS funding covers 80% of costs',
      'Intelligence fabric captures tribal knowledge',
    ],
  },

  // Intelligence Fabric Benefits
  intelligenceFabric: {
    keyBenefits: [
      'Captures tribal knowledge before employees leave',
      'Makes every decision data-driven',
      'Automates complex workflows',
      'Provides predictive insights',
    ],
    valueProps: {
      immediate: 'Fix broken POCs',
      shortTerm: 'Automate workflows',
      longTerm: 'Build intelligence platform',
    },
  },

  // Competitive Analysis
  competitors: {
    bigFour: {
      approach: '18-month transformation',
      cost: '$5-15M',
      successRate: '23%',
      weakness: 'Slow, expensive, low success',
    },
    cloudVendors: {
      approach: 'Platform lock-in',
      cost: '$2-5M',
      successRate: '31%',
      weakness: 'Tools without implementation',
    },
    modax: {
      approach: '90-day sprints',
      cost: '$200K-1M',
      successRate: '87%',
      strength: 'Fast, proven, AWS-funded',
    },
  },

  // Success Metrics
  successMetrics: {
    avgTimeToProduction: 87, // days
    clientRetentionRate: 94, // percentage
    npsScore: 72,
    avgROI: 320, // percentage
  },
} as const;

// Helper functions
export const getFormattedRevenue = (value: number): string => {
  if (value >= 1) {
    return `$${value}M`;
  }
  return `$${Math.round(value * 1000)}K`;
};

export const getFormattedDealSize = (value: number): string => {
  if (value >= 1000000) {
    return `$${value / 1000000}M`;
  }
  return `$${value / 1000}K`;
};

export const calculateTotalTAM = (): number => {
  return Object.values(businessMetrics.marketSize.segments)
    .reduce((sum, segment) => sum + segment.tam, 0);
};

export const calculateTotalModernizationSpend = (): number => {
  return Object.values(businessMetrics.marketSize.segments)
    .reduce((sum, segment) => sum + segment.modernizationSpend, 0);
};