"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Message {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  created_at: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const res = await fetch("/api/messages");
        const data = await res.json();
        if (res.ok) setMessages(data);
      } catch (err) {
        console.error("Failed to fetch messages:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  // sanitize text to safely render inside SweetAlert html
  const escapeHtml = (unsafe: string) =>
    unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/`/g, "&#96;");

  const handleShowMessage = (m: Message) => {
    const sender = `${m.firstName} ${m.lastName}`.trim() || "Unknown sender";
    const phoneLine = m.phone ? `<div><strong>Phone:</strong> ${escapeHtml(m.phone)}</div>` : "";
    const emailLine = m.email ? `<div><strong>Email:</strong> ${escapeHtml(m.email)}</div>` : "";
    const safeMessage = escapeHtml(m.message || "");

    Swal.fire({
      title: sender,
      html: `${emailLine}${phoneLine}<hr/><pre style=\"white-space:pre-wrap;text-align:left;\">${safeMessage}</pre>`,
      confirmButtonText: "Close",
      width: 600,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white text-gray-900">
        <span className="loading loading-spinner loading-lg text-gray-700"></span>
        <p className="ml-4 text-lg text-gray-700">Loading messages...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white min-h-screen mt-10 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2 text-pink-900">Messages</h1>
          <p className="text-center text-gray-600">Review all customer messages in one place</p>
        </div>

        {messages.length === 0 ? (
          <div className="card bg-white border shadow">
            <div className="card-body items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 opacity-50 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
              <h2 className="card-title text-2xl mt-4">No messages yet</h2>
              <p className="text-gray-600">Check back later for new messages from your clients.</p>
            </div>
          </div>
        ) : (
          <div className="card bg-pink-200 border border-pink-500 shadow overflow-hidden">
            <div className="card-body p-0">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-base font-semibold text-gray-600 px-6 py-4 text-left">Name</th>
                      <th className="text-base font-semibold text-gray-600 px-6 py-4 text-left">Email</th>
                      <th className="text-base font-semibold text-gray-600 px-6 py-4 text-left">Phone</th>
                      <th className="text-base font-semibold text-gray-600 px-6 py-4 text-left">Message</th>
                      <th className="text-base font-semibold text-gray-600 px-6 py-4 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {messages.map((m, idx) => (
                      <tr key={m.id} className={`transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-50`}>
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{m.firstName} {m.lastName}</div>
                        </td>
                        <td className="px-6 py-4">
                          <a href={`mailto:${m.email}`} className="text-blue-600 hover:underline">{m.email}</a>
                        </td>
                        <td className="px-6 py-4">
                          {m.phone ? <a href={`tel:${m.phone}`} className="text-teal-600 hover:underline">{m.phone}</a> : "N/A"}
                        </td>
                        <td className="px-6 py-4 max-w-xs">
                          <div
                            role="button"
                            tabIndex={0}
                            onClick={() => handleShowMessage(m)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") handleShowMessage(m);
                            }}
                            className="text-gray-900 whitespace-normal cursor-pointer hover:underline"
                            aria-label={`Open message from ${m.firstName} ${m.lastName}`}
                          >
                            <span className="block sm:hidden">
                              {m.message.length > 10 ? m.message.slice(0, 10) + "..." : m.message}
                            </span>
                            <span className="hidden sm:block">
                              {m.message}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(m.created_at).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}