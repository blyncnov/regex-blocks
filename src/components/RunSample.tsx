import React, { useState } from "react";
import { Play, Check, X, AlertCircle } from "lucide-react";

type TestCase = {
  id: number;
  input: string;
  shouldMatch: boolean;
};

type RunSampleProps = {
  regex: string;
};

const RunSample: React.FC<RunSampleProps> = ({ regex }) => {
  const [testCases, setTestCases] = useState<TestCase[]>([
    { id: 1, input: "", shouldMatch: true },
  ]);

  const [regexFlags, setRegexFlags] = useState("g");
  const [results, setResults] = useState<
    { id: number; passed: boolean; error?: string }[]
  >([]);
  const [showResults, setShowResults] = useState(false);

  const runTests = () => {
    if (!regex) return;

    try {
      const pattern = new RegExp(regex, regexFlags);
      const res = testCases.map((tc) => ({
        id: tc.id,
        passed: pattern.test(tc.input) === tc.shouldMatch,
      }));
      setResults(res);
      setShowResults(true);
    } catch {
      setShowResults(false);
    }
  };

  const passedCount = results.filter((r) => r.passed).length;

  return (
    <section className="w-full mx-auto p-4 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="block space-y-1">
          <h2 className="text-2xl font-bold">Test Regex Pattern</h2>
          <p className="text-sm">
            Add test cases to validate your regex pattern
          </p>
        </div>

        <input
          value={regexFlags}
          onChange={(e) => setRegexFlags(e.target.value)}
          placeholder="flags"
          className="w-24 px-3 py-1 border border-gray-300 rounded text-sm"
        />
      </div>

      {/* Current Regex */}
      <div className="bg-gray-100 rounded-lg p-4">
        <p className="text-sm text-gray-500 mb-1">Current Regex</p>
        <code className="font-mono text-lg text-blue-600 break-all">
          {regex || "—"}
        </code>
      </div>

      {/* Test Cases */}
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h3 className="font-medium">Test Cases</h3>
          <button
            onClick={() =>
              setTestCases((p) => [
                ...p,
                { id: Date.now(), input: "", shouldMatch: true },
              ])
            }
            className="text-sm text-blue-600 hover:underline font-semibold"
          >
            + Add Case
          </button>
        </div>

        {testCases.map((tc, i) => {
          const result = results.find((r) => r.id === tc.id);
          return (
            <div
              key={tc.id}
              className={`rounded-lg p-4 border-2 ${
                showResults
                  ? result?.passed
                    ? "border-green-400"
                    : "border-red-400"
                  : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-gray-500">Case {i + 1}</span>
                {showResults &&
                  result &&
                  (result.passed ? (
                    <Check className="text-green-500 w-4 h-4" />
                  ) : (
                    <X className="text-red-500 w-4 h-4" />
                  ))}
              </div>

              <input
                value={tc.input}
                onChange={(e) =>
                  setTestCases((p) =>
                    p.map((t) =>
                      t.id === tc.id ? { ...t, input: e.target.value } : t
                    )
                  )
                }
                placeholder="Test string"
                className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-sm"
              />

              <div className="flex gap-4 mt-4 text-sm">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    checked={tc.shouldMatch}
                    onChange={() =>
                      setTestCases((p) =>
                        p.map((t) =>
                          t.id === tc.id ? { ...t, shouldMatch: true } : t
                        )
                      )
                    }
                  />
                  Should match
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    checked={!tc.shouldMatch}
                    onChange={() =>
                      setTestCases((p) =>
                        p.map((t) =>
                          t.id === tc.id ? { ...t, shouldMatch: false } : t
                        )
                      )
                    }
                  />
                  Should not match
                </label>
              </div>
            </div>
          );
        })}
      </div>

      {/* Run */}
      <button
        onClick={runTests}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
      >
        <Play size={18} />
        Run Tests
      </button>

      {/* Summary */}
      {showResults && (
        <div
          className={`rounded-lg p-4 flex items-center gap-2 ${
            passedCount === testCases.length
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {passedCount === testCases.length ? <Check /> : <AlertCircle />}
          <span className="font-medium">
            {passedCount}/{testCases.length} tests passed
          </span>
        </div>
      )}
    </section>
  );
};

export default RunSample;
