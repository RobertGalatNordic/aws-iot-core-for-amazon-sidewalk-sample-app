// Copyright 2023 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

export const ENDPOINTS = {
  devices: "/api/devices",
  device: "/api/devices/:id",
  measurement: "/api/measurements/:id",
  led: "/api"
};

export const interpolateParams = (
  route: string,
  params: { [k: string]: string }
) => {
  let interpolatedRoute = route;
  Object.keys(params).forEach((key) => {
    interpolatedRoute = interpolatedRoute.replace(`:${key}`, params[key]);
  });
  return interpolatedRoute;
};
