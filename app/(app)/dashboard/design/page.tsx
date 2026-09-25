'use client';

/**
 * Design Studio — the working page.
 *
 * Three columns, left to right, in the order the pipeline runs: the programme
 * you set, the model that results, the numbers it produces. In Manual mode the
 * left column is live: moving a slider re-evaluates the thermal model on the
 * spot, which is what makes the connection between a parameter and a result
 * something you can feel rather than read.
 *
 * The full-width band underneath is the problem statement's own output —
 * indoor temperature, solar gain and heat flow for a representative day — kept
 * out of the third column so the 24-hour curve has the room to be read. It is
 * driven by the same `currentThermal` the columns are, so a slider moved in
 * manual mode moves the curve.
 */

import { ParameterPanel } from '@/components/dashboard/ParameterPanel';
import { ViewportPanel } from '@/components/dashboard/ViewportPanel';
import { ResultsPanel } from '@/components/dashboard/ResultsPanel';
import { ShelterResultPanel } from '@/components/dashboard/ShelterResultPanel';

export default function DesignPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(320px,360px)_minmax(0,1fr)_minmax(360px,420px)]">
        <div className="flex min-h-0 flex-col xl:h-[720px]">
          <ParameterPanel />
        </div>
        <div className="flex min-h-0 flex-col xl:h-[720px]">
          <ViewportPanel />
        </div>
        <div className="flex min-h-0 flex-col xl:h-[720px]">
          <ResultsPanel />
        </div>
      </div>

      <ShelterResultPanel />
    </div>
  );
}
