import { render, screen } from '@testing-library/react';

describe('when user want to register', () => {
    describe('register success', () => {});

    describe('email format not valid', () => {});

    describe('email exist in database', () => {});

    describe('min character 8 for password', () => {});

    describe('max character 50 for password', () => {});

    describe('register fail', () => {});

    describe('when user is register, redirect to last page', () => {});
});

describe('when user want to login', () => {
    describe('login success', () => {});

    describe('email format not valid', () => {});

    describe('user exist in database with this email', () => {});

    describe('min character 8 for password', () => {});

    describe('max character 50 for password', () => {});

    describe('email match with password', () => {});

    describe("email don't match with password", () => {});

    describe('login fail', () => {});

    describe('redirect to login page when user is not connected', () => {});

    describe('when user is connnected, redirect to last page', () => {});
});
