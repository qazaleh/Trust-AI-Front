// Curated public lab evidence, evaluated 7 November 2026 (UTC).
// Audited against saved per-test response bodies and training reports.
// PASS describes test execution/checks; it is not a model quality certification.
// Keep records, response payloads, artifacts and environment details out of this module.
export const evaluationRun = { date: '2026-11-07' }

export const labScenarios = [
  {
    id: 'adult',
    dataset: 'Adult Census Income',
    sourceUrl: 'https://www.kaggle.com/datasets/uciml/adult-census-income',
    model: 'LogisticRegression',
    split: { training: 24092, validation: 0, test: 6023 },
    training: {
      accuracy: 0.8070728872654823,
      recall: 0.8394403730846103,
      roc_auc: 0.903618875931452
    },
    passed: 4,
    skipped: 0,
    tests: [
      { id: 'fairness_pretrain', status: 'PASS', samples: 30115 },
      { id: 'fairness_posttrain', status: 'PASS', samples: 6023 },
      { id: 'shap_global', status: 'PASS', samples: 100 },
      { id: 'lime_local', status: 'PASS', samples: 3 }
    ],
    evidence: {
      parityDifference: -0.251,
      disparateImpact: 0.23,
      groups: { privileged: 18012, unprivileged: 1887, excluded: 10216 }
    }
  },
  {
    id: 'german_credit',
    dataset: 'German Credit',
    sourceUrl: 'https://www.kaggle.com/datasets/kabure/german-credit-data-with-risk',
    model: 'RandomForestClassifier',
    split: { training: 800, validation: 0, test: 200 },
    training: { accuracy: 0.7, recall: 0.8166666666666667, roc_auc: 0.7815476190476189 },
    passed: 3,
    skipped: 0,
    tests: [
      { id: 'lime_local', status: 'PASS', samples: 3 },
      { id: 'dice_classification', status: 'PASS', samples: 1 },
      { id: 'shap_global', status: 'PASS', samples: 200 }
    ],
    evidence: {
      generated: 4,
      requested: 4,
      queryCount: 1,
      changedFeatures: [ 'creditAmount', 'duration', 'purpose' ]
    }
  },
  {
    id: 'telco_churn',
    dataset: 'Telco Customer Churn',
    sourceUrl: 'https://www.kaggle.com/datasets/blastchar/telco-customer-churn',
    model: 'CatBoostClassifier',
    split: { training: 4453, validation: 1114, test: 1392 },
    training: {
      accuracy: 0.7564655172413793,
      recall: 0.7896174863387978,
      roc_auc: 0.8461690047827523
    },
    passed: 3,
    skipped: 0,
    tests: [
      { id: 'shap_global', status: 'PASS', samples: 300 },
      { id: 'shap_local', status: 'PASS', samples: 3 },
      { id: 'fairness_posttrain', status: 'PASS', samples: 1392 }
    ],
    evidence: {
      sampleSize: 300,
      backgroundSize: 50,
      ranking: [
        { key: 'tenure', value: 0.44844014 },
        { key: 'monthlyContract', value: 0.32244443 },
        { key: 'twoYearContract', value: 0.25655057 },
        { key: 'monthlyCharges', value: 0.24270708 },
        { key: 'totalCharges', value: 0.22995567 }
      ]
    }
  },
  {
    id: 'insurance',
    dataset: 'Medical Insurance',
    sourceUrl: 'https://www.kaggle.com/datasets/mirichoi0218/insurance',
    model: 'XGBRegressor',
    split: { training: 852, validation: 213, test: 267 },
    training: { mae: 2411.435671535288, rmse: 4141.9517232558255, r2: 0.8756556258311832 },
    passed: 3,
    skipped: 0,
    tests: [
      { id: 'shap_global', status: 'PASS', samples: 267 },
      { id: 'dice_regression', status: 'PASS', samples: 1 },
      { id: 'fairness_regression', status: 'PASS', samples: 267 }
    ],
    evidence: {
      generated: 3,
      requested: 3,
      queryCount: 1,
      desiredRange: [ 1000, 5000 ],
      parityQuantile: 0.632,
      impactQuantile: null,
      groups: { privileged: 212, unprivileged: 55, excluded: 0 }
    }
  }
]
