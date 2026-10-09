# Revised Salinity Pipeline Report

## Title

Integrative Transcriptomic, Genomic, and Machine Learning Analysis Identifies Candidate Genes for Rice Salinity Tolerance

## What Changed

The earlier SNP-only `SPKF` model was replaced with a biologically aligned salinity workflow. Objective 1 remains the transcriptomic discovery layer. The revised analysis adds a public salinity phenotype dataset from 3K Rice accessions and published salinity GWAS SNPs.

## Public Salinity Phenotype Dataset

- Public salinity phenotype rows parsed: 479
- Rows matched to PLINK/3K accession IDs: 478
- Extreme-class rows used for ML: 293
- Salinity target for ML: high vs low germination index under 60 mM NaCl

## Published GWAS Integration

- Published significant GWAS SNP rows parsed: 204
- Expression candidates screened: top 500 salinity-responsive genes/probes with coordinates
- Window for expression-GWAS overlap: +/- 100,000 bp
- Expression candidates with nearby published GWAS support: 28

## ML Summary

Primary validation scheme: population_blocked_group_5_fold

Best model: regularized_logistic_regression

Best model metrics:

| validation_scheme | model | n_samples | positive_rate | balanced_accuracy | precision | recall | f1 | average_precision | roc_auc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| population_blocked_group_5_fold | regularized_logistic_regression | 293 | 0.5017064846416383 | 0.5632746249184606 | 0.5703703703703704 | 0.5238095238095238 | 0.5460992907801419 | 0.5427463547918542 | 0.5794893299785668 |

All model metrics:

| validation_scheme | model | n_samples | positive_rate | balanced_accuracy | precision | recall | f1 | average_precision | roc_auc |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| population_blocked_group_5_fold | regularized_logistic_regression | 293 | 0.502 | 0.563 | 0.570 | 0.524 | 0.546 | 0.543 | 0.579 |
| population_blocked_group_5_fold | random_forest | 293 | 0.502 | 0.546 | 0.550 | 0.524 | 0.537 | 0.513 | 0.558 |
| population_blocked_group_5_fold | prevalence_baseline | 293 | 0.502 | 0.434 | 0.419 | 0.333 | 0.371 | 0.456 | 0.418 |
| stratified_5_fold | random_forest | 293 | 0.502 | 0.536 | 0.537 | 0.544 | 0.541 | 0.571 | 0.576 |
| stratified_5_fold | regularized_logistic_regression | 293 | 0.502 | 0.539 | 0.540 | 0.551 | 0.545 | 0.555 | 0.556 |
| stratified_5_fold | prevalence_baseline | 293 | 0.502 | 0.500 | 0.502 | 1.000 | 0.668 | 0.498 | 0.493 |

## Final Prioritization

- Final ranked candidate rows: 500
- Genes/probes with published GWAS support: 18
- Genes/probes with ML SNP-neighborhood support: 1

Top candidates:

| ID_REF | IDENTIFIER | gene_symbol | gene_id | chromosome | gene_start | gene_end | log2_fold_change_saline_vs_control | abs_log2_fold_change | fdr_bh | expression_rank | published_gwas_support | gwas_trait | gwas_position | nearest_published_gwas_distance_bp | ml_support | nearest_ml_snp | ml_snp_distance_bp | ml_importance_rank | evidence_score |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Os.16044.1.S1_at | LOC4329464 | LOC4329464 | 4329464 | 2 | 18454406 | 18457141 | 2.7404 | 2.7404 | 0.5422 | 4 | True | GR-5d | 18465405.0000 | 8264.0000 | False |  |  |  | 3 |
| Os.8413.2.A1_x_at | LOC4335562 | LOC4335562 | 4335562 | 4 | 16945205 | 16951596 | 2.4564 | 2.4564 | 0.6616 | 10 | True | GR-10d | 16875404.0000 | 69801.0000 | False |  |  |  | 3 |
| Os.51742.1.S1_x_at | LOC4329812 | LOC4329812 | 4329812 | 2 | 22622384 | 22623162 | 2.2764 | 2.2764 | 0.5764 | 19 | True | GR-10d | 22612000.0000 | 10384.0000 | False |  |  |  | 3 |
| Os.2371.1.S1_at | Os12g0448900 | LOC4352160 | 4352160 | 12 | 15330154 | 15340506 | 2.1199 | 2.1199 | 0.7239 | 33 | True | GR-10d | 15244741.0000 | 85413.0000 | False |  |  |  | 3 |
| Os.8413.2.A1_at | LOC4335562 | LOC4335562 | 4335562 | 4 | 16945205 | 16951596 | 1.9083 | 1.9083 | 0.6807 | 70 | True | GR-10d | 16875404.0000 | 69801.0000 | False |  |  |  | 3 |
| Os.49289.1.S1_x_at | LOC4340879 | LOC4340879 | 4340879 | 6 | 12297995 | 12298879 | 1.8299 | 1.8299 | 0.7050 | 88 | True | GR-10d | 12241674.0000 | 56321.0000 | False |  |  |  | 3 |
| Os.49505.2.S1_at | LOC4332814 | LOC4332814 | 4332814 | 3 | 12871629 | 12873928 | 1.7371 | 1.7371 | 0.5422 | 119 | True | MGT | 12972810.0000 | 98882.0000 | False |  |  |  | 3 |
| Os.27382.2.S1_at | LOC4328047 | LOC4328047 | 4328047 | 2 | 627678 | 630663 | 1.6203 | 1.6203 | 0.5112 | 158 | True | VI | 655464.0000 | 24801.0000 | False |  |  |  | 3 |
| Os.49096.2.S1_x_at | LOC4342943 | LOC4342943 | 4342943 | 7 | 11170894 | 11182960 | -1.6019 | 1.6019 | 0.6245 | 172 | True | GR-10d | 11217565.0000 | 34605.0000 | False |  |  |  | 3 |
| Os.18504.1.S1_at | LOC4351664 | LOC4351664 | 4351664 | 12 | 3960586 | 3963997 | -1.5782 | 1.5782 | 0.7928 | 185 | True | GR-10d | 4050799.0000 | 86802.0000 | False |  |  |  | 3 |
| Os.9486.1.S1_at | LOC4341034 | LOC4341034 | 4341034 | 6 | 15968724 | 15974097 | 1.5440 | 1.5440 | 0.7704 | 209 | True | GR-10d | 16040311.0000 | 66214.0000 | False |  |  |  | 3 |
| Os.8413.2.A1_a_at | Os04g0354600 | LOC4335562///LOC4335559 | 4335562///4335559 | 4 | 16945205 | 16951596 | 1.5057 | 1.5057 | 0.7351 | 235 | True | GR-10d | 16875404.0000 | 69801.0000 | False |  |  |  | 3 |
| Os.55383.1.S1_at | LOC4335043 | LOC4335043 | 4335043 | 4 | 4419301 | 4421142 | 1.5017 | 1.5017 | 0.7239 | 238 | True | GR-5d | 4391690.0000 | 27611.0000 | False |  |  |  | 3 |
| Os.55623.1.S1_at | LOC9266983 | LOC9266983 | 9266983 | 8 | 26904739 | 26906662 | 1.4939 | 1.4939 | 0.7615 | 247 | True | GR-10d | 26935874.0000 | 29212.0000 | False |  |  |  | 3 |
| Os.50417.1.S1_at | LOC4335529 | LOC4335529 | 4335529 | 4 | 16419958 | 16424936 | -1.4824 | 1.4824 | 0.6904 | 258 | True | MGT | 16501431.0000 | 76495.0000 | False |  |  |  | 3 |
| Os.9988.1.S1_at | Os11g0533400 | Os11g0533400 | 4350647 | 11 | 18763796 | 18764563 | 1.4705 | 1.4705 | 0.7393 | 268 | True | GR-5d | 18758390.0000 | 5406.0000 | False |  |  |  | 3 |
| Os.51227.1.S1_s_at | LOC4335529 | LOC4335529 | 4335529 | 4 | 16419958 | 16424936 | -1.4547 | 1.4547 | 0.7322 | 281 | True | MGT | 16501431.0000 | 76495.0000 | False |  |  |  | 3 |
| Os.55823.1.S1_at | LOC4352120 | LOC4352120 | 4352120 | 12 | 13981994 | 13983013 | 1.2583 | 1.2583 | 0.8056 | 489 | True | GR-10d | 13941848.0000 | 40146.0000 | False |  |  |  | 3 |
| Os.57466.1.S1_at | LOC4325621 | LOC4325621 | 4325621 | 1 | 31998726 | 32003685 | 1.9892 | 1.9892 | 0.5112 | 52 | False |  |  |  | True | 32045216_A | 41531.0000 | 20.0000 | 3 |
| Os.9417.1.S1_at | LOC4347708 | LOC4347708 | 4347708 | 9 | 21155961 | 21157962 | 3.8519 | 3.8519 | 0.6453 | 1 | False |  |  |  | False |  |  |  | 2 |

## Interpretation

The revised project is now publishable in structure because salinity-responsive expression evidence is connected to independent salinity phenotype/GWAS evidence from 3K Rice accessions. The ML model is a supporting prioritization layer. It should not be the only claim unless validation metrics are strong.

## Data Sources

- Public 3K Rice salinity phenotype and GWAS supplementary tables from Hoang et al., BMC Plant Biology 2017.
- GEO salinity expression data and 3K Rice PLINK panel from the supplied project folder.
