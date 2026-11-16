"use client";

import { useEffect } from "react";

/**
 * ClientGuard: Prevents fatal React hydration & reconciliation crashes caused by:
 * 1. Google Chrome Auto-Translate wrapping text in <font> tags.
 * 2. Browser extensions (Grammarly, Password managers, etc.) modifying the DOM tree.
 * 
 * When external scripts alter the DOM hierarchy, React's internal call to
 * `parent.removeChild(child)` or `parent.insertBefore(new, ref)` throws:
 * "NotFoundError: Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node."
 * 
 * This safeguard ensures that if the child has been reparented, it is safely
 * removed from its current parent without crashing the entire React tree.
 */
export default function ClientGuard() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof Node === "undefined") return;

    const originalRemoveChild = Node.prototype.removeChild;
    Node.prototype.removeChild = function <T extends Node>(child: T): T {
      if (child.parentNode !== this) {
        if (child.parentNode) {
          return child.parentNode.removeChild(child) as T;
        }
        return child;
      }
      return originalRemoveChild.call(this, child) as T;
    };

    const originalInsertBefore = Node.prototype.insertBefore;
    Node.prototype.insertBefore = function <T extends Node>(newNode: T, referenceNode: Node | null): T {
      if (referenceNode && referenceNode.parentNode !== this) {
        if (referenceNode.parentNode) {
          return referenceNode.parentNode.insertBefore(newNode, referenceNode) as T;
        }
        return newNode;
      }
      return originalInsertBefore.call(this, newNode, referenceNode) as T;
    };
  }, []);

  return null;
}
