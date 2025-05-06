# React Fiber Architecture

This is a description of the new core algorithm of React, codenamed Fiber. It is a work in progress.

---

## Table of Contents

- [Introduction](#introduction)
- [Background](#background)
- [Overview](#overview)
- [Goals](#goals)
- [Incremental Rendering](#incremental-rendering)
- [Basic Algorithm](#basic-algorithm)
- [Scheduling](#scheduling)
- [Continuation](#continuation)
- [Coroutines](#coroutines)
- [Exceptions](#exceptions)
- [Conclusion](#conclusion)

---

## Introduction

Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.

---

## Background

Before Fiber, React used a stack-based recursive algorithm for reconciliation. It worked well but had limitations such as being synchronous and non-interruptible.

---

## Overview

Fiber is a reimplementation of the stack, specialized for React components. It uses linked list structures to traverse and manage the component tree.

---

## Goals

The primary goals of Fiber are:

- Incremental rendering: Split rendering work into chunks and spread it out over multiple frames.
- Ability to pause, abort, and resume work.
- Reuse previously completed work.
- Assign priority to different types of updates.
- Concurrency.

---

## Incremental Rendering

Incremental rendering means breaking rendering work into units that can be done over multiple frames to avoid blocking the main thread.

---

## Basic Algorithm

Fiber replaces the recursive stack with a linked list of work units. This allows pausing and resuming work.

---

## Scheduling

Scheduling is the ability to prioritize work. Fiber introduces a scheduling mechanism to control when and how updates are performed.

---

## Continuation

Continuation allows React to remember where it left off and resume rendering from that point. This is achieved through the structure of Fiber nodes.

---

## Coroutines

Coroutines are a way to yield control in the middle of a process. React Fiber supports coroutine-like behavior to control rendering.

---

## Exceptions

Fiber supports error boundaries and error handling using a new mechanism introduced in React 16.

---

## Conclusion

React Fiber is a complete rewrite of the React core algorithm with a focus on incremental rendering and performance.

---

