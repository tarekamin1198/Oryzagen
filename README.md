# OryzaGen: Rice Salinity Tolerance Candidate Gene Prioritization

OryzaGen is a static web prototype for presenting an integrative rice salinity tolerance analysis. It combines transcriptomic evidence, published GWAS support, and population-blocked machine learning results to prioritize candidate genes associated with salt tolerance in rice (*Oryza sativa*).

## Live Website

```text
https://tarekamin1198.github.io/Oryzagen/
```

## Project Aim

The aim of this project is to identify and prioritize high-confidence candidate genes for rice salinity tolerance by integrating:

- Differential gene expression evidence from salinity-related transcriptomic data.
- Published GWAS loci associated with rice salinity tolerance.
- SNP-based machine learning models evaluated using population-blocked validation.

## Repository Structure

```text
Oryzagen/
  index.html
  styles.css
  app.js
  favicon.svg
  .nojekyll
  README.md
  figures/
    expression_gwas_overlap_top_candidates.svg
    salinity_all_models_population_blocked_roc_auc.svg
  downloads/
    final_salinity_candidate_gene_priority.csv
    salinity_boosting_model_metrics.csv
    REVISED_SALINITY_PIPELINE_REPORT.md
```

## Website Sections

### 1. Evidence Integration

Shows how transcriptomic candidate genes were cross-referenced with published GWAS regions to identify stronger candidate genes supported by multiple evidence layers.

### 2. Predictive Modelling

Displays population-blocked machine learning performance. The CatBoost model achieved a blocked ROC-AUC of 0.584, which is reported as modest and interpreted as prioritization support rather than a final field-ready predictor.

### 3. Candidate Genes

Lists prioritized genes with genomic coordinates, expression support, GWAS overlap support, and ranking information.

### 4. Downloads

Provides downloadable outputs for further review:

- Final candidate gene priority table.
- Model performance metrics.
- Revised salinity pipeline report.

## Important Notes

This repository contains only the website and small result files needed for public presentation.

Large raw datasets are intentionally not included, such as:

- PLINK `.bed`, `.bim`, `.fam` genotype files.
- Large `.raw` genotype matrices.
- Full notebook output folders.
- Large intermediate analysis files.

This keeps the GitHub Pages repository lightweight and suitable for browser-based hosting.

## Main Result Summary

The strongest result of the project is not the standalone machine learning accuracy. The main contribution is the integrated prioritization framework, where candidate genes are supported by transcriptomic evidence and published GWAS overlap, with machine learning used as an additional ranking layer.

Key reported outputs include:

- 478 matched rice accessions used in the revised analysis.
- 28 expression-GWAS overlapping candidate genes.
- 293 extreme-class samples used for machine learning.
- Best population-blocked ROC-AUC: 0.584 using CatBoost.

## How To View Locally

Download or clone the repository, then open:

```text
index.html
```

in any modern web browser.

## Project Title

**OryzaGen: A Predictive Computational Framework Integrating Multi-Omics Genomics and Machine Learning to Identify and Prioritize Salt-Tolerant Genes in Rice**
