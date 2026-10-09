# OryzaGen GitHub Pages site

This is a lightweight static presentation of the OryzaGen rice salinity-tolerance research prototype. It presents candidate-gene prioritization results, selected figures, model metrics, the research vision, potential applications, a development roadmap and the lead researcher. Computational candidates require experimental validation.

The updated white-background logo is in `assets/oryzagen-logo-white.png`. It is used in the header, opening section and browser tab. The original image remains in `assets/oryzagen-logo.jpg` as a reference. The original pitch deck is in `downloads/OryzaGen.pdf`.

The website includes the project purpose, data-to-results workflow, expression and published GWAS evidence, model performance, selected candidate genes, potential applications, development roadmap, lead researcher and downloadable outputs. It presents the analysis as one connected workflow without separate objective labels.

The current results report 478 matched accessions, 28 expression-GWAS overlaps and 293 selected extreme-class samples for machine learning. CatBoost reached a population-blocked ROC-AUC of 0.584. This modest result supports exploratory prioritization and does not establish a validated crop-performance predictor. Candidate rankings and nearby GWAS loci also do not prove causal gene function.

The pitch deck outlines the broader research proposal. Dataset uploads, backend analysis, sequence-based deep learning and extensions to wheat and maize are planned or future work. The current prototype has not demonstrated savings in breeding cost or time.

Public website: [OryzaGen](https://tarekamin1198.github.io/Oryzagen/).

## Files

- `index.html`: page content and navigation.
- `styles.css`: desktop and mobile styling.
- `app.js`: selected candidate-gene rows.
- `assets/oryzagen-logo-white.png`: active website logo with a white exterior background.
- `assets/oryzagen-logo.jpg`: original logo retained for reference.
- `figures/expression_gwas_overlap_top_candidates.svg`: expression candidates with nearby published GWAS evidence.
- `figures/salinity_all_models_population_blocked_roc_auc.svg`: model comparison under population-blocked validation.
- `downloads/final_salinity_candidate_gene_priority.csv`: full candidate priority output.
- `downloads/salinity_boosting_model_metrics.csv`: XGBoost, LightGBM and CatBoost validation metrics.
- `downloads/REVISED_SALINITY_PIPELINE_REPORT.md`: research pipeline report.
- `downloads/OryzaGen.pdf`: original pitch deck.
- `.nojekyll`: keeps the deployment as a plain static website.

The notebook performs the analysis. This static website displays its outputs and does not run analyses on uploaded data. Large BED/BIM/FAM genotype files are excluded.

## Preview

Open `index.html` in a browser. No server or package installation is required.
