import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ElementType,
    PropsWithChildren,
  } from 'react'
  
  /**
   * Valid html element to pass
   */
  type TAsProperty<C extends ElementType> = {
    as?: C
  }
  
  /**
   * Props to omit from element props so no duplicate props
   */
  type TPropertiesToOmit<C extends ElementType, P> = keyof (TAsProperty<C> & P)
  
  /**
   * Polymorphic component without ref
   */
  export type TPolymorphicComponentProp<
    C extends ElementType,
    Properties = Record<string, unknown>
  > = PropsWithChildren<Properties & TAsProperty<C>> &
    Omit<ComponentPropsWithoutRef<C>, TPropertiesToOmit<C, Properties>>
  
  /**
   * Get element type from generic for ref
   */
  export type TPolymorphicRef<C extends ElementType> =
    ComponentPropsWithRef<C>['ref']
  
  /**
   * Polymorphic component with ref (forwardRef)
   */
  export type TPolymorphicComponentPropWithRef<
    C extends ElementType,
    Properties = Record<string, unknown>
  > = TPolymorphicComponentProp<C, Properties> & { ref?: TPolymorphicRef<C> }
  