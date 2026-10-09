# OryzaGen GitHub Pages site

This is a lightweight static presentation of the OryzaGen rice salinity-tolerance research prototype. It presents candidate-gene prioritization results, selected figures, model metrics, the research vision, potential applications, a development roadmap and the lead researcher. Computational candidates require experimental validation.

The supplied project logo is in `assets/oryzagen-logo.jpg`. The original pitch deck is in `downloads/OryzaGen.pdf`. The deck outlines the broader proposal; the website distinguishes current results from proposed deep learning and future crop expansion.

## Files

- `index.html`: page content and navigation.
- `styles.css`: desktop and mobile styling.
- `app.js`: selected candidate-gene rows.
- `assets/`: project logo.
- `figures/`: published dashboard charts.
- `downloads/`: result tables, research report and pitch deck.

The notebook performs the analysis. This static website displays its outputs and does not run analyses on uploaded data. Large BED/BIM/FAM genotype files are excluded.

## Preview

Open `index.html` in a browser. No server or package installation is required.

## Publish or Update

To publish with GitHub Pages, create a GitHub repository, copy the contents of this folder into the repository root, push the files to the default branch, and enable **Settings → Pages → Deploy from a branch**. Select the default branch and `/ (root)`.

For an existing deployment, upload the updated files to the same repository root and preserve the `assets/`, `figures/` and `downloads/` folder names. Paths and filenames are case-sensitive on GitHub Pages. Wait for the Pages deployment to finish, then reload the website.
