# AWS Backend Deployment

This directory contains the Riverside Books FAQ chatbot backend, packaged and deployed to AWS via GitHub Actions.

## Workflow

The `deploy-backend-aws.yml` workflow runs on pushes to `main` that touch this directory. It:

1. Installs Python dependencies from `app/requirements.txt`
2. Bundles `main.py` and `app/` into a zip artifact
3. Uploads the artifact to GitHub Actions
4. If AWS secrets are configured, uploads the zip to S3

## Required GitHub Secrets

| Secret | Purpose |
|--------|---------|
| `AWS_ROLE_ARN` | IAM role ARN for GitHub OIDC federation |
| `AWS_BACKEND_ARTIFACT_BUCKET` | S3 bucket name for backend artifacts |

## AWS Console Prerequisites

1. Create an S3 bucket for artifacts (e.g. `riverside-chatbot-artifacts`)
2. Create an IAM OIDC identity provider for `https://token.actions.githubusercontent.com`
3. Create an IAM role with:
   - Trust policy scoped to the repo and branch
   - Permission to `s3:PutObject` on the artifact bucket
4. Add the role ARN and bucket name as GitHub repo secrets

## Current Status

The workflow packages and uploads to S3 only. No Lambda or API Gateway is provisioned automatically. To make the backend callable over HTTP, add infrastructure in the AWS Console or extend the workflow with a deployment step.