# ML Evaluation Lab: evidence notes

The public page uses an explicit allowlist in `src/lib/mlEvaluationLab.js`.
No original response payload, dataset row, model, credential or environment path is copied into the site. Translation sources contain interpretations and methodology, not individual examples.

Source: `ML-Components-Test-Usecases`, recorded run `20261107T140657_553288Z` (7 November 2026, UTC). Both available evidence checkouts contain the same latest run. Read scenario and test configuration, artifact manifest, training summary and latest API summary before reviewing the individual responses.

## Service evidence

Each of the 21 individual test JSON files was checked for status and response contents. The latest summary records **13 PASS, 8 SKIPPED**. All eight skipped entries belong to Diabetes and state that TensorFlow is unavailable. Skipped entries contain no evaluated sample count or attack result.

| Public claim | Saved response | Field / scope |
|---|---|---|
| Adult parity −0.251; impact 0.23 | `adult_fairness_pretrain.json` | `body.result.metrics`; PRETRAIN labels, favorable income >50K |
| Adult groups 18,012 / 1,887 / 10,216 excluded | same | `body.result.group_counts`; White men / women in other recorded race categories / remaining intersections |
| Adult sample 30,115 | same | Sum of privileged, unprivileged and excluded counts; all processed records, not just compared groups |
| Adult SHAP 100 samples, background 50, permutation; LIME 3 queries | `adult_shap_global.json`, `adult_lime_local.json` | Returned explainer and sample counts; LIME configuration 1,000 perturbations |
| German four requested and four verified bad→good alternatives | `german_credit_dice_classification.json` | `checks.requested_count`, `checks.generated_count`, original/alternative predictions and reload verification reason |
| German all four change amount and duration, three also purpose | same | Aggregate of `counterfactuals[].changed_features`; no original or alternative record is published |
| German global SHAP 200, background 50; LIME 3 | `german_credit_shap_global.json`, `german_credit_lime_local.json` | Returned counts and config |
| Telco global ranking: 0.44844014, 0.32244443, 0.25655057, 0.24270708, 0.22995567 | `telco_churn_shap_global.json` | First five `body.result.global_importance` entries: tenure, month-to-month contract, two-year contract, monthly charges, total charges. These are encoded features, not sums across categories |
| Telco global SHAP 300, background 50; local 3 | `telco_churn_shap_global.json`, `telco_churn_shap_local.json` | Returned explained/background sample counts |
| Telco fairness 1,392 input rows | `telco_churn_fairness_posttrain.json` | 586 privileged + 106 unprivileged + 700 excluded; configured gender/SeniorCitizen intersections |
| Insurance three alternatives in range 1,000–5,000 | `insurance_dice_regression.json` | Generated count, desired range, all three returned predictions and reload verification |
| Insurance alternatives change only BMI | same | Aggregate changed-feature lists; smoking unchanged; no individual values published |
| Insurance parity at median 0.632; impact quantile undefined | `insurance_fairness_regression.json` | `STATISTICAL_PARITY_QUANTILE`, `DISPARATE_IMPACT_QUANTILE` (JSON null, never converted to zero) |
| Insurance fairness groups 212 / 55; SHAP 267, background 50 | `insurance_fairness_regression.json`, `insurance_shap_global.json` | Returned group/sample counts |

Adult post-training fairness is sex-only and uses 6,023 held-out predictions. Its configuration differs from the pre-training sex/race intersection analysis. The highlighted pre-training figures are not post-training predictive fairness measurements or a mitigation comparison.

All attempted historical run/report retrievals returned HTTP 404 (26 retrieval requests). Evidence comes from the saved evaluation **response bodies**, not these retrieval requests. PASS describes the harness checks, not model safety, fairness, compliance, or deployment readiness.

## Training evidence

Training values and split counts were cross-checked between `artifacts_manifest.json`, `reports/training/summary.md` and the five per-scenario training JSON files. Separate split reports and notebook preprocessing were inspected for context.

| Scenario | Fit / validation / test | Displayed held-out results (rounded) |
|---|---|---|
| Adult | 24,092 / none / 6,023 | Accuracy 80.7%; recall 83.9%; ROC AUC 0.904 |
| German | 800 / none / 200 | Accuracy 70.0%; recall 81.7%; ROC AUC 0.782 |
| Diabetes | 250 / 63 / 79 | Accuracy 82.3%; recall 88.5%; ROC AUC 0.899 |
| Telco | 4,453 / 1,114 / 1,392 | Accuracy 75.6%; recall 79.0%; ROC AUC 0.846 |
| Insurance | 852 / 213 / 267 | MAE 2,411.44; RMSE 4,141.95; R² 0.876 |

Diabetes complete-case filtering removes rows with zero-coded missing clinical measurements. Its held-out training results do not imply service robustness, privacy protection or clinical validity. The German labeled dataset and Diabetes mirror are the recorded replacement sources; their public Kaggle links are included.

## Website verification

Run `npm run build` to regenerate compiled translations, bundle the app and emit localized lab HTML entry documents in both `.html` and directory-index forms for extensionless and trailing-slash requests. The client router updates metadata during navigation; the emitted entry HTML supplies localized canonical/Open Graph/language alternatives to clients that do not execute JavaScript. Existing hosting must serve the emitted directories or SPA fallback as appropriate.

Check `/en/use-cases` and `/tr/use-cases`, both language switches, scenario anchors, keyboard-operated details, the desktop/mobile/footer links and narrow-screen table scrolling. The horizontal training table region is keyboard focusable and labelled.

Verification completed for this implementation: `npm run build`, `git diff --check`, allowlisted-figure comparisons against the saved evidence, matching English/Turkish translation keys, server rendering in both languages, language-switch link targets, and HTTP 200 plus localized metadata checks for both slash and extensionless production routes. Main page text and status color pairs exceed 4.5:1 contrast. Keyboard semantics and responsive CSS were reviewed in source. Visual desktop/mobile and in-browser keyboard/switch interaction checks remain unverified because the browser access host was unavailable in this session.
